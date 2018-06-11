var teclas ={
 UP:38,
 DOWN:40,
 LEFT:37,
 RIGHT:39,
};
  
document.addEventListener("keyup",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.msGetInputContext("2d");

dubujarLinea("red", 100, 100, 200, 200, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, xfinal);
lienzo.stroke();
lienzo.closePath();
}
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
  if(evento.keyCode == teclas.UP)
  {
    console.log("vamos para arriba"); 
  }

  switch(evento.keyCode)
  {
   case teclas.UP:
    console.log("arriba");
  break;
  case teclas.DOWN:
    console.log("abajo");
    break; 
    deafult:
       console.log("Otra tecla");
    break;
  }
}