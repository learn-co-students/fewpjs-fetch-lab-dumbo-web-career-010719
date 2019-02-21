// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hey")
// })

const testVar = {}
const bookURL= `https://anapioficeandfire.com/api/books`
const houseURL = `https://anapioficeandfire.com/api/houses`
const characterURL = `https://anapioficeandfire.com/api/characters`

function testFunc() {
  return "hi"
}

fetch(bookURL)
.then(res => res.json())
// .then(console.log)
.then(books => books.forEach(displayBook))

function displayBook(book) {
console.log(book)
}

fetch(houseURL)
.then(res => res.json())
// .then(console.log)
.then(houses => houses.forEach(displayHouse))

function displayHouse(house) {
  console.log(house)
}

fetch(characterURL)
.then(res => res.json())
// .then(console.log)
.then(characters => characters.forEach(displayCharacter))

function displayCharacter(character) {
  console.log(character)
}
