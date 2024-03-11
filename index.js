import analyzer from './analyzer.js';

const textoInput = document.getElementsByName('user-input')[0];
const resetButton = document.getElementById('reset-button');
const wordCountElement = document.querySelector('[data-testid="word-count"]');
const characterCountElement = document.querySelector('[data-testid="character-count"]');
const characterCountExcludingSpacesElement = document.querySelector('[data-testid="character-no-spaces-count"]');
const NumbersCountElement = document.querySelector('[data-testid="number-count"]');
const numberSumElement = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverageElement = document.querySelector('[data-testid="word-length-average"]');


// Eventos del Reset Button:
resetButton.addEventListener('click', () => {
  textoInput.value = '';
  wordCountElement.textContent = 'Palabras: 0';
  characterCountElement.textContent = 'Caracteres: 0';
  characterCountExcludingSpacesElement.textContent = 'Caracteres sin Espacios: 0';
  NumbersCountElement.textContent = 'Números: 0';
  numberSumElement.textContent = 'Suma total de números: 0';
  wordLengthAverageElement.textContent = 'Longitud media de las Palabras: 0';

});

//Eventos del textarea y variables según cada función:
textoInput.addEventListener('input', () => {
  const texto = textoInput.value;
  const wordCount = analyzer.getWordCount(texto);
  const characterCount = analyzer.getCharacterCount(texto);
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(texto);
  const NumbersCount = analyzer.getNumberCount(texto);
  const numberSum = analyzer.getNumberSum(texto);
  const averageWordLength = analyzer.getAverageWordLength(texto);




  wordCountElement.textContent = `Palabras: ${wordCount}`;
  characterCountElement.textContent = `Caracteres: ${characterCount}`;
  characterCountExcludingSpacesElement.textContent = `Caracteres sin Espacios: ${characterCountExcludingSpaces}`;
  NumbersCountElement.textContent = `Números: ${NumbersCount !== undefined ? NumbersCount : 0}`;
  numberSumElement.textContent = `Suma total de números: ${numberSum || 0}`;
  
  wordLengthAverageElement.textContent = `Longitud media de las Palabras: ${averageWordLength || 0}`;
});
