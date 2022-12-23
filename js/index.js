
function encriptar(){
  let texto = document.getElementById('textoEncriptar').value;
  let textoEncriptado = document.getElementById('textoDesencriptar').innerHTML;
  let botonEncriptar = document.getElementById('botonEncriptar');

  textoEncriptado = texto;
}

botonEncriptar.onclick = encriptar;