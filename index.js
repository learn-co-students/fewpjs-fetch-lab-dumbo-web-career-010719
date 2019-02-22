const testVar = {}

function testFunc() {
  return "hi"
}

function fetchBooks(){
fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
  // .then(json => getCharacter(json));
  // .then(json => fifthBook(json));
}

function renderBooks(json){
  const div = document.querySelector('#books')

  for(i = 0; i < json.length; i++){
    Object.keys(json[i]).forEach((key) => {
      const li = document.createElement('li')
      li.innerText = `${key} : ${json[i][key]}`
      div.append(li)
    })
  }
}

function getCharacter(json){
  for(i = 0; i < json.length; i++){
    for(const character in json[i].characters){
      let url = json[i].characters[character]
      let charArr = url.split("/")
      let charNum = charArr[charArr.length - 1]
      if (charNum === "1031"){
        console.log(json[i].name)
      }
    }
  }
}

function fifthBook(json){
  for (i = 0; i < json.length; i++){
   let x = json[i].url
   if(x.includes("5")){
     console.log(x)
     return json[i].url
   }
 }
}

fetchBooks();
