'use strict';

var noYesorNo = 'Yikes! Please enter Yes or No.';
var points = 0;
var dec1 = 'I am a proud owner of a pet snake';
var dec2 = 'I was born and raised in Seattle, WA.'
var dec3 = 'I have 3 sisters.'
var dec4 =
var dec5 =

alert('Welcome to Maries guessing game! To play, simply read the following statements and decide whether or not it is true. Yes = True  No = False');
  
// looking for common operations in first 5 questions

var quesFuncNo = function(dec, flip) {
  var input = prompt(dec);
  console.log(dec 'was answered '+input);
  if(input === flip) {
    alert ('That is correct!');
    points = points +1;
  } else {
    prompt ('Not quite - lets move on.');
  }
  if (points === 1) {
    alert ('You have ' + points + ' point');
  } else {
    alert ('You have ' +points+ ' points' );
  }
}



quesFuncNo(dec1, 'no'); //flip 'no' //pet
quesFuncNo(dec2, 'yes');//flip 'yes'//city
quesFuncNo(dec3, 'yes');
quesFuncNo(dec4, 'no');
quesFuncNo(dec5, 'no');

// var pet = prompt('I am a proud owner of a pet snake');
// if(pet === 'no') {
//   alert ('That is correct!');
//   points = points +1;
// } else {
//   pet = prompt ('Not quite - lets move on.');
// }

// if (points === 1) {
//   alert ('You have ' + points + ' point');
// } else {
//   alert ('You have ' +points+ ' points' );
// }


// var city = prompt('I was born and raised in Seattle, WA.');
// if(city === 'yes') {
//   alert ('That is correct!');
//   points = points +1;
// } else {
//   city = prompt ('Not quite - lets move on.');
// }
// if (points === 1) {
//   alert ('You have ' + points + ' point');
// } else {
//   alert ('You have ' +points+ ' points' );
// }


var sibling = prompt('I have 3 sisters.');
if(sibling === 'yes') {
  alert ('That is correct!');
  points = points +1;
} else {
  sibling = prompt ('Not quite - lets move on.');
}
if (points === 1) {
  alert ('You have ' + points + ' point');
} else {
  alert ('You have ' +points+ ' points' );
}

var jump = prompt('I bungee jumped off the Stratosphere hotel in Las Vegas 3 times.');
if(jump === 'no') {
  alert ('That is correct!');
  points = points +1;
} else {
  jump = prompt ('Not quite - lets move on.');
}
if (points === 1) {
  alert ('You have ' + points + ' point');
} else {
  alert ('You have ' +points+ ' points' );
}

var lived = prompt('I lived in New York for 4 years.');
if(lived === 'yes') {
  alert ('That is correct!');
  points = points +1;
} else {
  lived = prompt ('Not quite - lets move on.');
}
if (points === 1) {
  alert ('You have ' + points + ' point');
} else {
  alert ('You have ' +points+ ' points' );
}
  

var number = prompt('Guess a number between 1 and 10.');

for (var i = 0; i < 4; i++) {
  if (number === '7') {
    alert ('That is correct!');
    console.log(number + '- That is correct!' );
    points = points +1;
    break;
  } else {
    if (number <= 7) {
      number=prompt ('That number is too low - try again.')
    } else { 
      number = prompt ('That number is too high - try again.')
    }
  }
}
if (points === 1) {
  alert ('You have ' + points + ' point');
} else {
  alert ('You have ' +points+ ' points' );
}
  

var faveFoods = ['pizza', 'pasta', 'tacos', 'bread', 'fruit', 'chicken'];
var foodGuess = prompt('Can you guess one of my favorite foods?');
for (var i = 0; i < faveFoods.length; i++) {
  console.log('i is referring to:', faveFoods[i]);
  if(foodGuess === faveFoods[i]) {
    alert('That is correct!');
    points = points +1;
    break;
  } else {
    alert('That is not correct'); 
    prompt('That is not correct. Try again.');
  }
}


