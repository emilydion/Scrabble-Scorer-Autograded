// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
   console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
   return word; 
};

let simpleScorer = function (word) {
   let totalScore = 0; 
   for (let i = 0; i < word.length; i++) {
      totalScore++; 
   }
   return totalScore;
};

let vowelBonusScorer = function (word) {
   let totalScore = 0; 
   for (let i = 0; i < word.length; i++) {
      if ("aeiouAEIOU".indexOf(word[i]) === -1) {
         totalScore++; 
      }
      else {
         totalScore += 3; 
      }
   }
   return totalScore; 
};

let scrabbleScorer;

let scorer1 = {name:"Simple Score", description:"Each letter is worth 1 point.", scoringFunction: function(word) {return simpleScorer(word)}}
let scorer2 = {name:"Bonus Vowels", description:"Vowels are 3 pts, consonants are 1 pt.", scoringFunction: function(word) {return vowelBonusScorer(word)}}
let scorer3 = {name:"Scrabble", description:"The traditional scoring algorithm.", scoringFunction: function(word) {return oldScrabbleScorer(word)}}

const scoringAlgorithms = [scorer1, scorer2, scorer3];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   startingWord = initialPrompt();
   console.log(scoringAlgorithms[1].name); 
   console.log(scoringAlgorithms[1].scoringFunction(startingWord));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
