var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var pukul = document.querySelector("#pukul")
if (h >= 5 && h < 11) pukul.innerHTML =" SELAMAT PAGI! ";
if (h >= 11 && h < 16) pukul.innerHTML =" SELAMAT SIANG! ";
if (h >= 16 && h < 19) pukul.innerHTML = " SELAMAT SORE! ";
if (h >= 19 || h < 5) pukul.innerHTML = " SELAMAT MALAM! ";

