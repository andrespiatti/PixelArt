var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.background = colorActual;
  })
);

// Resolucion de creacion de Grilla y Paleta de colores

var paletaColores = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");

var iterarListaColores= function(){
  for(var i = 0; i<nombreColores.length; i++){
    var colorElement = document.createElement("div");
    colorElement.style.backgroundColor = nombreColores[i];
    colorElement.className = "color-paleta";
    paletaColores.appendChild(colorElement);
  }
}

iterarListaColores();

function crearGrilla (){
  for(var i = 0; i<1750; i++){
      var pixelGrilla = document.createElement("div");
      grilla.appendChild(pixelGrilla);
  }
}

crearGrilla();

// Resolucion de Cambio de color del Indicador de color seleccionado

var coloresPaleta = document.getElementById("paleta");

var indicadorColor = document.getElementById("indicador-de-color");

function cambiarIndicador(e){
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor; 
}

coloresPaleta.addEventListener("click", cambiarIndicador);

// Resolucion de cambio de color en Grilla

function pintarGrilla(e){
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

grilla.addEventListener("click", pintarGrilla);

// Resolucion Presionar mouse

var mousePresionado;

grilla.onmousedown = function(){
  mousePresionado = true;
}
grilla.onmouseup = function(){
  mousePresionado = false;
}

grilla.onmouseover = function(e){
  if(mousePresionado === true){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }else{
    return false;
  }
}

// Resolucion borrar pantalla

var borrarGrilla = $("#borrar");
borrarGrilla.click(function(){
  $("#grilla-pixeles div").animate({"backgroundColor":"#ffffff"},3000);
});

// Resolucion cargar imagenes de heroes

var imagenesHeroes = document.getElementsByClassName("imgs");

for(var i = 0 ; i<imagenesHeroes.length; i++){
  imagenesHeroes[i].addEventListener("click", function(e){
    var imagenSeleccionada = e.target.id;
    switch (imagenSeleccionada){
      case "batman":
          cargarSuperheroe(batman);
          break;
      case "wonder":
          cargarSuperheroe(wonder);
          break;
      case "flash":
          cargarSuperheroe(flash);
          break;
      case "invisible":
          cargarSuperheroe(invisible);
          break;
    }
  });
}

// Resolucion guardado de dibujo

var botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click", guardarPixelArt);
