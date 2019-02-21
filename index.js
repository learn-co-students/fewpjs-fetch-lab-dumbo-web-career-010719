const testVar = {}
const body = document.querySelector('body')
const data = fetchBooks()
function testFunc() {
  return "hi"
}


const fetchBooks = () => {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

const fetchHouses = () => {
fetch('https://anapioficeandfire.com/api/houses')
.then(resp => resp.json())
.then(json => console.log(json));
}

const fetchCharacters = () => {
fetch('https://anapioficeandfire.com/api/characters')
.then(resp => resp.json())
.then(json => console.log(json));
}

console.log(fetchBooks());
console.log(fetchHouses());
console.log(fetchCharacters());
