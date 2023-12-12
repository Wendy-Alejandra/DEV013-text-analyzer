import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const clkLimpiar = document.getElementById("reset-button");
const limpiarTexto = document.querySelector("textarea");
const limpiarMetricas = document.querySelector(".box");

clkLimpiar.addEventListener("click", function Limpiar() {
  limpiarTexto.value= "";
  limpiarMetricas.value= "";
})