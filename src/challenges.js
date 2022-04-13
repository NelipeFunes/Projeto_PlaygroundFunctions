// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
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
  return last + ', ' + first;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsVictory = 3 * wins;
  let pointsTies = 1 * ties;
  let totalPoints = pointsVictory + pointsTies;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let tempNumber = numbers[0];
  let numberRepetition = 0;
  for (let i = 1; i < numbers.length; i += 1) {
    if (tempNumber < numbers[i]) {
      tempNumber = numbers[i];
    }
  }
  for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === tempNumber) {
      numberRepetition += 1;
    }
  }

  return numberRepetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let phrase = 'os gatos trombam e o rato foge';
  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  } else if (dist2 === dist1) return phrase;
}

// Desafio 8
function fizzBuzz(numbers) {
  let phrase = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      phrase.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      phrase.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      phrase.push('buzz');
    } else {
      phrase.push('bug!');
    }
  }
  return phrase;
}

// Desafio 9
function encode(string) {
  let splitedString = string.split('');

  for (let i = 0; i < splitedString.length; i += 1) {
    if (splitedString[i] === 'a') {
      splitedString[i] = '1';
    } else if (splitedString[i] === 'e') {
      splitedString[i] = '2';
    } else if (splitedString[i] === 'i') {
      splitedString[i] = '3';
    } else if (splitedString[i] === 'o') {
      splitedString[i] = '4';
    } else if (splitedString[i] === 'u') {
      splitedString[i] = '5';
    }
  }
  splitedString = splitedString.join('');
  return splitedString;
}

function decode(string) {
  let splitedString = string.split('');

  for (let i = 0; i < splitedString.length; i += 1) {
    if (splitedString[i] === '1') {
      splitedString[i] = 'a';
    } else if (splitedString[i] === '2') {
      splitedString[i] = 'e';
    } else if (splitedString[i] === '3') {
      splitedString[i] = 'i';
    } else if (splitedString[i] === '4') {
      splitedString[i] = 'o';
    } else if (splitedString[i] === '5') {
      splitedString[i] = 'u';
    }
  }
  splitedString = splitedString.join('');
  return splitedString;
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
