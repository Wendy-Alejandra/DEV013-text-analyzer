const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. Partir el texto en porciones, 3. Contar porciones(palabras), 4. Mostrar resultado
    const wordCount = text.trim().split(" ").length;
    return wordCount;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. Contar cada caracter del texto, 3.Mostrar resultado

    let characterCount = 0;
    for (let i=0; i<text.length; i++) {
      characterCount++;
    }
    return characterCount;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. Eliminar los espacios y signos, 3. Contar cada caracter del texto, 4. Mostrar resultado 
    //SIGNOS: . , ; : ... ¿? ¡! () [] {} "" '' | ¨ / \ * 
  
    const ExcludingSpaces = text.replace(/\W/g, "").length;
    return ExcludingSpaces;

  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. Llamar a la función contar palabras, 3. Contar la longitud de cada palabra, 4.sumar todas las palabras 
    //4. Dividir por la cant. de palabras (getWordCount()) 5. 

    const wordlength = text.replace(/\s/g,"").length;
    const totalWords= analyzer.getWordCount(text);
    const avrg = wordlength / totalWords;

    return Math.round(avrg*100)/100;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //PASOS: 1. Obtener texto, 2. buscar numeros con regex, 3. Sacar la longitud de los numeros, 4. Mostrar resultado

    const list = text.match(/\d+([/.]\d+)?\b/gi);
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
    //PASOS: 1. Obtener texto, 2. crear un arreglo, 3. recorrer el arreglo, 4. sumar los items del arreglo.

    const list = text.match(/\d+([/.]\d+)?\b/gi);
    let sumNum = 0;
    if (list === null) {
      return 0
    } else {
      for (let i=0; i<list.length; i++) {
        sumNum+= parseFloat(list[i]);
      }
    }

    return sumNum;
  },
};

export default analyzer;