const canvas = document.getElementById("canvas");
const ctx= canvas.getContext("2d");
let image = new Image();
image.src= "http://peach.cool/images/icon-peach-header-big@2x.png"
image.onload = function(){
  console.log("La imagen fue cargada")
  ctx.drawImage(this,20,20,300/*ancho*/,300/*largo*/);
  //ctx.drawImage(la imagen,corX con respecto a la imag,corY con respcto a la imagen, ancho,alto,
  //posicion en x,posicion en y, ancho de imagen, largo de imagen);
}
