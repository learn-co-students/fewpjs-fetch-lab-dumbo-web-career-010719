const iceAndFireUrl = "https://anapioficeandfire.com/api/books"

// function fetchBooks() {
//   return fetch(iceAndFireUrl)
//   .then(function(response){
//     return response.json()
//   }).then(function(json){
//     renderBooks(json)
//   })
// }

// function fetchBooks(){
//   return fetch("https://anapioficeandfire.com/api/books")
//   .then(res => res.json())
//   .then(json => renderBooks(json))
// }

async function fetchBooks(){
   const data = await fetch(iceAndFireUrl)
   const books = await data.json()
   renderBooks(books)
}

fetchBooks()

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })
