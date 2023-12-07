function mueveReloj(){
var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();

var sufijo = ' am';
if(horas > 12) {
  horas = horas - 12;
  sufijo = ' pm';
}

if(horas < 10) { horas = '0' + horas; }
if(minutos < 10) { minutos = '0' + minutos; }
if(segundos < 10) { segundos = '0' + segundos; }

document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos+sufijo;
setTimeout("mueveReloj()",1000)

}

    let contador = 0;
    function sumar(){
    contador++;
    document.getElementById("contador1").innerHTML = 'PC Planet ' + contador;
    }
    document.getElementById("contador").addEventListener("click", sumar);


function generarNuevoColor(opt){
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for(var i = 0; i < 6; i++){
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    const miTexto=document.getElementById("menus");
    if (opt === 1) {
        miTexto.style.background = color;
    } else {
        miTexto.style.color = color;
    }
}


const miTexto=document.getElementById("reloj");
 
setInterval(() => {
    r=Math.floor(Math.random() * 255);
    g=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);
    miTexto.style.color="rgb("+r+","+g+","+b+")";
}, 2000);