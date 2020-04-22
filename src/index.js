import './styles/styles.sass';

import data from './resignation.js';

document.addEventListener('DOMContentLoaded', () => {
  const contentElement = document.getElementById('content');
  const outputElement = document.getElementById('output');

  // get data and split into words by space
  let processedData = data.split(' ');
  //console.log(processedData);

  const firstLettersList = processedData.map((word) => {
    const firstLetter = word[0];
    //console.log(firstLetter);
    return firstLetter;
  })

  //console.log(firstLettersList)

  const uniqueFirstLetters = [...new Set(firstLettersList)];

  //console.log(uniqueFirstLetters);

  const lettersWithColors = uniqueFirstLetters.map((letter, index) => {
    const color = "hsl(" + Math.round(index*360/uniqueFirstLetters.length) + ", 50%, 50%)";
    return {letter, color}
  });

  //console.log(lettersWithColors);

  // lettersWithColors.forEach((letterObject) => {
  //   if (letterObject.letter === undefined) return false;
  //   const letterElement = document.createElement("div");
  //   letterElement.innerText = letterObject.letter;
  //   letterElement.style.color = letterObject.color;
  //   contentElement.appendChild(letterElement);
  // })

  processedData.forEach((word) => {
    const wordElement = document.createElement("span");
    const wordLetterWithColor = lettersWithColors.find((el) => {
      return el.letter === word[0];
    });
    console.log({word, wordLetterWithColor});

    wordElement.innerText = word + ' ';
    wordElement.style.color = wordLetterWithColor.color;

    console.log(wordElement);

    output.appendChild(wordElement);
  })


  //contentElement.innerText = JSON.stringify(processedData);

  // const filtered = processedData.filter((item) => {
  //   if (item[0] === 'w') {
  //     return true;
  //   }
  // })

  // console.log(filtered);

})


