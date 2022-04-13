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
  let repetiçoes = {};
  if (numbers.length !== 11) return 'Array com tamanho incorreto.'
  let count = 0;
  for( let i = 0; i <= 11; i++) {
    if(numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (i of numbers) {
    if(repetiçoes[i] = repetiçoes[i]) {
      repetiçoes[i] +=1;
    } else {
      repetiçoes[i] = 1;
    }
    if (repetiçoes[i] >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let phoneNumber = "("+numbers[0]+numbers[1]+")"+" "+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+"-"+numbers[7]+numbers[8]+numbers[9]+numbers[10]
  return phoneNumber;
}

// Desafio 12
function triangleCheck(a,b,c) {
  let result = false;
  if(a < b + c && b < a + c && c < b + a) {
    result = true;
  }
  return result;
}

// Desafio 13
function hydrate(array) {
  let sum = 0;
  const splited = array.split(' ');
  splited.forEach((element) => {
    if(element === '1') {
      sum += 1;
    } else if (element === '2') {
      sum += 2
    } else if (element === '3') {
      sum += 3
    } else if (element === '4') {
      sum += 4
    } else if (element === '5') {
      sum += 5
    } else if (element === '6') {
      sum += 6
    } else if (element === '7') {
      sum += 7
    } else if (element === '8') {
      sum += 8
    } else if (element === '9') {
      sum += 9
    }
  });
  if(sum === 1) {
    return (`${sum} copo de água`)
  }
  return (`${sum} copos de água`)
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
