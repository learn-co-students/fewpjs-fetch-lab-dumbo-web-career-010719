const testVar = {}

function testFunc() {
  return "hi"
}

const fetchBooks = ()=>{
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  // .then(json => find1031(json))
}

const renderBooks=(json) =>{
  const div = document.querySelector("#books")

  for(let i = 0; i<json.length; i++){
     Object.keys(json[i]).forEach((key)=>{
      const li = document.createElement('li')
       li.innerText = `${key} : ${json[i][key]}`
       div.append(li)
     })
     
  }
}



const find1031= (json)=>{
  for(let i = 0; i<json.length; i++){
      for (const chara in json[i].characters){
        const url=json[i].characters[chara].split("/");
        if(url[url.length-1] === "1031"){
           console.log(json[i].name)
           console.log(json[i].characters[chara])
        }
      }
  }

}

fetchBooks();
