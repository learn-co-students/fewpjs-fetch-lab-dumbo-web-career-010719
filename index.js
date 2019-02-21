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

function fetchBooks() {
fetch(bookURL)
.then(res => res.json())
// .then(console.log)
.then(books => books.forEach(displayBook))
}

function displayBook(book) {
// console.log(book)
const bookList = document.querySelector("#books")
bookList.innerHTML = `<h2> ${book.name} </h2>
`
}

fetch(houseURL)
.then(res => res.json())
// .then(console.log)
.then(houses => houses.forEach(displayHouse))

function displayHouse(house) {
  // console.log(house)
  const houseList = document.querySelector("#houses")
  houseList.innerHTML = `<h2>${house.name}</h2>`

fetch(characterURL)
.then(res => res.json())
// .then(console.log)
.then(characters => characters.forEach(displayCharacter))

function displayCharacter(character) {
  console.log(character)
  const characterList = document.querySelector("#characters")
  characterList.innerHTML = `<h2> ${character.name} </h2>
  `
}
