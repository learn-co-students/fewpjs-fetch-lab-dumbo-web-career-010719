const testVar = {}

function testFunc() {
  return 'hi'
}

fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(resp))
