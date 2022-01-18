//Function creates and randomly choses from an array list of Rock,Paper,& Scissors 
//Math.random(); will return a random number between 0 & <1.
//Math.floor(); will return an integer < or = the given number. A whole number returns 
//return array[Math.floor(Math.random()*array.length)];  
//Math.Random() produces a decimal >1. For example say .7, Which multiplied by array.length (2 in our case) will result in 1.4. 
//Math.floor(); rounds it to a whole number which means our 3rd array would be returned in this example 



/*Created a function called computerPlay, within the function we created an array list w/a set of moves.We then use methods on the array list to randomly select one of the moves.*/

 function computerPlay(){
   const compMoves = ["Rock", "Paper", "Scissors"];
   const randomChoice = compMoves[Math.floor(Math.random()* compMoves.length)];
   return randomChoice;
} 

/* Created a prompt for the user to make their play. As well as a system to change user input to become case sensitive. Ex: If user inputs "ROck" userPlay will change it to "Rock"*/

let userPrompt = window.prompt('Choose your weapon: Rock, Paper, or Scissors', 'What will it be?')
let userNew = userPrompt.toLowerCase();
let userPlay = userNew.charAt(0).toUpperCase() + userNew.slice(1);

/*Created a function to play a single round of the game. */

function playRound(playerSelection, computerSelection) {
   computerSelection = computerPlay();
   playerSelection = userPlay;
   let playerScore = 0;
   let compScore = 0;

   if (playerSelection == computerSelection)
      return "It\'s a tie!";
   else if (playerSelection == "Paper" && computerSelection == "Rock")
      return "You win, Paper beats Rock"; 
   else if (playerSelection == "Rock" && computerSelection == "Scissors")
      return "You win, Rock beats Scissors";
   else if (playerSelection == "Scissors" && computerSelection == "Paper")
      return "You win, Scissors beats Paper";
   else if (computerSelection == "Paper" && playerSelection == "Rock")
      return "You lose, Paper beats Rock";
   else if (computerSelection == "Rock" && playerSelection == "Scissors")
      return "You lose, Rock beats Scissors ";
   else if (computerSelection == "Scissors" && playerSelection == "Paper")
      return "You lose, Scissors beats Paper ";
}
//Write a function that plays 5 rounds AND KEEPS SCORE
//ADD A WAY TO CHANGE YOUR PICK OF ROCK/PAPER/SCISSORS ON EACH TURN OUT OF 5

//MAYBE SOMETHING LIKE THIS?
//function game() {
  /* console.log(playRound() 
  if round ends with player scoring a point. Display point
   console.log(playRound second time)
   if round ends with player scoring another point show cumulative points
   if round ended with computer scoring point display the comp points as well as players
   find a way to do this 5 times and declare a winner based on points
}*/


//Create a function to keep score of the game & declare a winner based on that score
/*function keepScore(){
}

console.log(game());
*/
