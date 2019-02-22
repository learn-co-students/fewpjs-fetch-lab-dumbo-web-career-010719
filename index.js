const testVar = {}

function testFunc() {
  return "hi"
}

fetchBooks()

function fetchBooks(){
  fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(books => renderBooks(books))
}

function renderBooks(books){
  console.log(books);
  books.forEach(book => {
    const h1 = document.createElement('h1')
    const body = document.querySelector('body')
    h1.innerText = book.name
    body.append(h1)
  })
}
