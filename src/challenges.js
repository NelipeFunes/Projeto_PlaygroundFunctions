// Desafio 1
function compareTrue(p1,p2) {
  if(p1=== true && p2===true){
  return true;
}
else{
  return false;
}
}
// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2;
  return area;
  
}

// Desafio 3
function splitSentence(string) {
  let myArray = string.split(' ');
  return myArray;
}

// Desafio 4
function concatName(myArray) {
   let first = myArray[0]
   let last = myArray[myArray.length - 1]
   return (last +', ' + first)
}

// Desafio 5
function footballPoints(wins,ties) {
  let pointsVictory = 3 * wins;
  let pointsTies = 1 * ties;
  let totalPoints = pointsVictory + pointsTies;
  return totalPoints
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
