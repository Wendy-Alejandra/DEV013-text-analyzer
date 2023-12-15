const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. Partir el texto en porciones, 3. Contar palabras, 4. Mostrar resultado
    const wordCount = text.split(" ").length;
    console.log(wordCount);
    // if (wordCount === 0) {
    //   document.write("word-count: 0")
    // } else
      return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. Contar caracteres, 3. Mostrar resultado
  
  },
  getCharacterCountExcludingSpaces: (text) => {

    // trim().length()
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
