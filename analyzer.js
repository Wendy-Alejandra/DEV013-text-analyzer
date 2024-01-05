const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    const wordCount = text.trim().split(" ").length;
    return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
   
    let characterCount = 0;
    for (let i=0; i<text.length; i++) {
      characterCount++;
    }
    return characterCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
     
    const ExcludingSpaces = text.replace(/\W/g, "").length;
    return ExcludingSpaces;

  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
   
    const wordlength = text.replace(/\s/g,"").length;
    const totalWords= analyzer.getWordCount(text);
    const avrg = wordlength / totalWords;

    return Math.round(avrg*100)/100;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   
    const list = text.match(/\b\d+([/.]\d+)?\b/gi);
    let cantNum = 0;
    if (list === null) {
      return 0
    } else {
      for (let i=0; i<list.length; i++) {
        cantNum++;
      }
    }

    return cantNum;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
   
    const list = text.match(/\b\d+([/.]\d+)?\b/gi);
    let sumNum = 0;
    if (list === null) {
      return 0
    } else {
      for (let i=0; i<list.length; i++) {
        sumNum+= parseFloat(list[i]);
      }
    }

    return Math.round(sumNum*10)/10;
  },
};

export default analyzer;