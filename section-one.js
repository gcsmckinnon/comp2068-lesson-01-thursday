// Generates a random integer between a min and max value (inclusively)

/*
  I'm a multi-line comment
*/

/**
 * Returns a random integer between a minimum
 * and maximum number, including the minimum
 * and maximum number (inclusive)
 * 
 * @param {number} min The starting number in the range
 * @param {number} max The ending number in the range
 * @return {number} The randomly determined integer
**/
function generateRandomInteger (min, max) {
  var randomNum = Math.random();
  randomNum = randomNum * (max - min + 1) + min;
  randomNum = Math.floor(randomNum);
  return randomNum;
}
//---------------------------------------------

// Variables
// scope decorators: let, const, var
var name = "Shaun";
if (true) {
  var last = "McKinnon";
}
var last = "jimbo";

if (true) {
  let middle = "Cameron";
  middle = "Todd";
  console.log(middle);
}

const age = 41;
const person = {};
const hobbies = [];

// Data types
// Main primitives: Strings, Numbers, Booleans
const str = "Hi I'm a string";
const num = 5;
const bool = true;
const nil = null;
const undy = undefined;