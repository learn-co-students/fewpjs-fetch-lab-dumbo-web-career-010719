
const fetch = require('node-fetch');

const testVar = {}

function testFunc() {
  return "hi"
}

const charButton = document.querySelector('#char-butt');
charButton.addEventListener('click', showChar);

function showChar(event) {
  event.preventDefault()
  const form = event.target.parentElement;
  console.log('wdqqw');
}

function fetchBooks(num) {
  fetch('https://anapioficeandfire.com/api/books')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json[num - 1].name);
    })
}

function fetchCharacter(num) {
  fetch(`https://anapioficeandfire.com/api/characters/${num}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json.name)
    })
}

function fetchHouses(num) {
  fetch(`https://anapioficeandfire.com/api/houses`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      for (const element of json) {
        console.log(element.name)
      }
    })
}

fetchBooks(5);
fetchCharacter(1031);
fetchHouses();
