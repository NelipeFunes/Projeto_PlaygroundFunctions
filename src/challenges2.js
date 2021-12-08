// Desafio 10
let myArray = [];

function techList(technologies,name) {
  if(technologies.length === 0){
    return ('Vazio!')}
  else{
    for(let i = 0;i<technologies.length; i+=1){
      let technologiesSort = technologies.sort()
        myArray.push({
          tech:technologiesSort[i],
          name:name
        }) 
    }
  }
    return myArray 
  }


// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
