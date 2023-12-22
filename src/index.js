import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Declaración de constantes para acceder a los elementos y atributos de HTML
const wordCount = document.querySelector("li[data-testid='word-count']");
const characterCount = document.querySelector("li[data-testid='character-count']");
const characterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']");
const numberCount = document.querySelector("li[data-testid='number-count']");
const numberSum = document.querySelector("li[data-testid='number-sum']");
const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']")
const cajaTexto = document.querySelector("textarea");
const clkLimpiar = document.getElementById("reset-button");

// Actualizar Métricas con el evento input del <textarea>
// Funciones limpiar contenido de la caja de texto y métricas
function mostrarMetricas() {
  const text = cajaTexto.value;
  wordCount.innerHTML= "word-count: " + analyzer.getWordCount(text);
  characterCount.innerHTML= "character-count: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.innerHTML= "character-no-spaces-count: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.innerHTML= "number-count: " + analyzer.getNumberCount(text);
  numberSum.innerHTML= "number-sum: " + analyzer.getNumberSum(text);
  wordLengthAverage.innerHTML= "word-length-average: " + analyzer.getAverageWordLength(text);
}

function limpiar() {
  cajaTexto.value= "";
  wordCount.innerHTML= "word-count: 0";
  characterCount.innerHTML= "character-count: 0";
  characterNoSpacesCount.innerHTML= "character-no-spaces-count: 0";
  numberCount.innerHTML= "number-count: 0";
  numberSum.innerHTML= "number-sum: 0";
  wordLengthAverage.innerHTML= "word-length-average: 0";
}

// Eventos
cajaTexto.addEventListener("input", mostrarMetricas);
clkLimpiar.addEventListener("click", limpiar);

