import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Declaración de constantes para acceder a los elementos y atributos de HTML
const actualizarInputs = [
  document.querySelector("li[data-testid='word-count']"),
  document.querySelector("li[data-testid='character-count']"),
  document.querySelector("li[data-testid='character-no-spaces-count']"),
  document.querySelector("li[data-testid='number-count']"),
  document.querySelector("li[data-testid='number-sum']"),
  document.querySelector("li[data-testid='word-length-average']")];
const limpiarMetricas = document.querySelector(".box");
// const textoEntrada = document.querySelector("user-input");
const cajaTexto = document.querySelector("textarea");
const clkLimpiar = document.getElementById("reset-button");

// Actualizar Métricas con el evento input del <textarea>
function mostrarMetricas() {
  const text = cajaTexto.value;
  console.log(text);
  actualizarInputs[0].innerHTML= "word-count: " + analyzer.getWordCount(text);

}

// Limpiar contenido de la caja de texto y métricas
function limpiar() {
  cajaTexto.value= "";
  actualizarInputs[0].value= "";
}

cajaTexto.addEventListener("input", mostrarMetricas);
clkLimpiar.addEventListener("click", limpiar);

// // console.log(clkLimpiar);
// console.log(analyzer.getWordCount("Hola Mundo de Dios"));
// // console.log(actualizarInputs[0]);
// console.log(actualizarMetricas())