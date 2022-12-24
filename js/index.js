// let textoEncriptado = document.getElementById("textoEncriptar");
// let textoDesencriptado = document.getElementById("textoDesencriptar");

let textoEncriptado = document.querySelector('#textoEncriptar');
let textoDesencriptado = document.querySelector('#textoDesencriptar');

// let botonEncriptar = document.getElementById("botonEncriptar");
// let botonDesencriptar = document.getElementById("botonDesencriptar");

let botonEncriptar = document.querySelector("#botonEncriptar");
let botonDesencriptar = document.querySelector("#botonDesencriptar");

let historial = document.getElementById("historial");

function encriptar() {
  let texto = textoEncriptado.value;
  texto = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  textoDesencriptado.innerText = texto;
  // historial.innerText = salida2;
}

function desenciptar() {
  let textoDes = textoDesencriptado.value;
  textoDes = textoDes
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  textoEncriptado.innerText = textoDes;
}

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desenciptar);

// botonEncriptar.onclick = encriptar;

// let boton = document.getElementById('botonEncriptar');
// function alerta() {
//   alert('hu');
// }
// boton.addEventListener('click', alerta);
// boton.add
