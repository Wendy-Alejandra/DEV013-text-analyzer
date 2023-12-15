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
console.log(actualizarInputs);

// for (actualizarInputs=0; actualizarInputs < 6; i++)
// console.log(actualizarInputs);
// const limpiarMetricas = document.querySelector(".box");
// const textoEntrada = document.querySelector("user-input");
// const wordCount = document.querySelector("li[data-testid='word-count']");
// const characterCount = document.querySelector("li[data-testid='character-count']");
// const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
// const numberCount = document.querySelector("li[data-testid='number-count']");
// const numberSum = document.querySelector("li[data-testid='number-sum']");
// const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']")
const cajaTexto = document.querySelector("textarea");
const clkLimpiar = document.getElementById("reset-button");

// Actualizar Métricas con el evento input del <textarea>
function mostrarMetricas() {
  const text = cajaTexto.value;
  document.querySelector("li[data-testid='word-count']").innerHTML= "word-count: " + analyzer.getWordCount(text);
// characterCount.innerHTML= "character-count: " + analyzer.getCharacterCount(text);
// characterNoSpacesCount.innerHTML= "character-no-spaces-count: " + analyzer.getCharacterCountExcludingSpaces(text);
// numberCount.innerHTML= "number-count: " + analyzer.getNumberCount(text);
// numberSum.innerHTML= "number-sum: " + analyzer.getNumberSum(text);
// wordLengthAverage.innerHTML= "word-length-average: " + analyzer.getAverageWordLength(text);
}

// function mostrarMetricas() {
//   const text = cajaTexto.value;
//     }
// }

// Limpiar contenido de la caja de texto y métricas
function limpiar() {
  cajaTexto.value= "";
  for(let i=0; i < 6; i++) {
    console.log(actualizarInputs[i]);
    actualizarInputs[i].innerHTML= actualizarInputs[i].textContent;
  }
}

// function limpiarWordCount() {
//   wordCount.value ="";
// }

cajaTexto.addEventListener("input", mostrarMetricas);
clkLimpiar.addEventListener("click", limpiar);
// wordCount.addEventListener("click", limpiarWordCount);

// const cargarPagina = location.reload();
// console.log(cargarPagina);

// // console.log(clkLimpiar);
// console.log(analyzer.getWordCount("Hola Mundo de Dios"));
// // console.log(actualizarInputs[0]);
// console.log(actualizarMetricas())