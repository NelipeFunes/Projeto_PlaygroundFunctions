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
function generatePhoneNumber(numbers) {
  let phoneNumber = "("+numbers[0]+numbers[1]+")"+" "+numbers[2]+numbers[3]+numbers[4]+numbers[5]+"-"+numbers[6]+numbers[7]+numbers[8]+numbers[9]
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
