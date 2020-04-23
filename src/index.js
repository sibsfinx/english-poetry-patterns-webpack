import './styles/styles.sass';

import data from './resignation.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('input');
  ['keydown', 'change'].forEach((event) => {
    inputElement.addEventListener(event, (e) => {
      processData(e.target);
    })
  })
});

const processData = (inputElement) => {
  //const contentElement = document.getElementById('content');
  const outputElement = document.getElementById('output');

  const data = inputElement.value;

  // get data and split into words by space
  //let processedData = data.split(/[\n\r\. ]/);
  let processedData = data.replace(/[\n\r]/g, '\n ').split(' ');


  console.log(processedData);

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

  output.innerHTML = '';

  processedData.forEach((word) => {
    const wordElement = document.createElement("span");
    const wordLetterWithColor = lettersWithColors.find((el) => {
      return el.letter === word[0];
    });

    wordElement.innerText = word + ' ';
    wordElement.style.color = wordLetterWithColor.color;
    wordElement.setAttribute('data-letter', word[0]);
    wordElement.classList.add('letter-item');

    ['mouseover', 'mouseout'].forEach((event) => {
      wordElement.addEventListener(event, (e) => {
        const letter = e.target.getAttribute('data-letter');
        const sameLetterElements = output.querySelectorAll('[data-letter='+letter+']');
        sameLetterElements.forEach((el) => {
          el.classList.toggle('letter-item--active');
        });
      })
    });

    output.appendChild(wordElement);
  })


  //contentElement.innerText = JSON.stringify(processedData);

  // const filtered = processedData.filter((item) => {
  //   if (item[0] === 'w') {
  //     return true;
  //   }
  // })

  // console.log(filtered);

}


