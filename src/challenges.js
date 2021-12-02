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
   let first = myArray[0];
   let last = myArray[myArray.length - 1];
   return (last + ', ' + first);
}

// Desafio 5
function footballPoints(wins,ties) {
  let pointsVictory = 3 * wins;
  let pointsTies = 1 * ties;
  let totalPoints = pointsVictory + pointsTies;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let tempNumber = 0;
  let numberRepetition = 0;
  for(let i = 0;i<numbers.length;i+=1){
    if(tempNumber<numbers[i]){
    tempNumber = numbers[i];
    }
  }
  for(i=0 ; i<numbers.length;i+=0){
    if(numbers[i]===tempNumber){
    numberRepetition+=1;
    }
  }

  return numberRepetition;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let dist1 = Math.abs(mouse-cat1);
  let dist2 = Math.abs(mouse-cat2);
  let phrase = "os gatos trombam e o rato foge"
if(dist1<dist2){
  return ('cat1')
}
else if(dist2<dist1){
  return ('cat2')
}
else if (dist2===dist1)
return phrase
}



// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode() {

}
function decode() {

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
