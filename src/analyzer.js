const analyzer = {  

  getWordCount: (text) => {
    const palabras = text.split(' ');    
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].trim() !== '') {
        count++;
      }
    }
    return count;
  },
 
  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char !== ' ' && char !== '.' && char !== ',') {
        count++;
      }
    } 
    return count;
  },

  getAverageWordLength: (text) => {
    if (!text) return 0;

    const words = text.split(' ');
    let totalLength = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i].trim();
      totalLength += word.length;
    }

    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2));
  },
    
  getNumberCount: (text) => {
    const words = text.split(' ');
    let count = 0;
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].trim();
  
      if (word !== '' && (!isNaN(Number(word)) || (!isNaN(Number(word.replace('.', ''))) && word.includes('.')))) {
        count++;
      }
    }
  
    return count;
  },
  
  getNumberSum: (text) => {
    const numbers = text.split(' ');
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      const word = numbers[i].trim();

      if (!isNaN(Number(word)) || (!isNaN(Number(word.replace('.', ''))) && word.includes('.'))) {
        sum += parseFloat(word);
      }
    }

    return sum;
  },
  
};

export default analyzer;