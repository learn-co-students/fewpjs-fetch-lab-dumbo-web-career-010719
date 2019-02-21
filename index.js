const testVar = {}

function testFunc() {
  return "hi"
}

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const booksList = document.getElementById("books")
  console.log(json);
  for (book of json) {
    renderBook(book);
  }
}

function renderBook(bookData) {
  const booksList = document.getElementById("books")
  const newBookEl = document.createElement('li');
  const titleEl = document.createElement('h2');
  const authorEl = document.createElement('p');
  const pagesEl = document.createElement('p');

  // console.log(`Key: ${key} Value: ${bookData[key]}`);
  titleEl.innerText = bookData["name"];
  authorEl.innerText = bookData["authors"][0];
  pagesEl.innerText = bookData["numberOfPages"];

  newBookEl.append(titleEl, authorEl, pagesEl);

  booksList.append(newBookEl);
}

document.addEventListener("DOMContentLoaded", fetchBooks)
