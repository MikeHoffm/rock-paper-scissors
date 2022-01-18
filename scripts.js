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
// Having the players choice pre defined outside of the function will only allow for one answer to be reused
//let userPrompt = window.prompt('Choose your weapon: Rock, Paper, or Scissors', 'What will it be?')
//let userNew = userPrompt.toLowerCase();
//let userPlay = userNew.charAt(0).toUpperCase() + userNew.slice(1);

/*Created a function to play a single round of the game. */

function playRound(playerSelection, computerSelection) {
   let userPrompt = window.prompt('Choose your weapon: Rock, Paper, or Scissors', 'What will it be?')
   let userNew = userPrompt.toLowerCase();
   let userPlay = userNew.charAt(0).toUpperCase() + userNew.slice(1);

   computerSelection = computerPlay();
   playerSelection = userPlay;

   if (playerSelection == computerSelection)
      return ("It\'s a tie! " + "You both chose " + playerSelection + " Your score is " + playerScore + " AI score is " + compScore); 
   else if (playerSelection == "Paper" && computerSelection == "Rock")
      return ("You win!" + " " + "Paper beats Rock!!" + " " + "Player Choice: Paper, AI Choice: Rock " + " Your score is " + ++playerScore + " AI score is " + compScore);
   else if (playerSelection == "Rock" && computerSelection == "Scissors")
      return ("You win!" + " " + "Rock beats Scissors!" + " " + "Player Choice: Rock, AI Choice: Scissors " + " Your score is " +  ++playerScore+ " AI score is " + compScore);
   else if (playerSelection == "Scissors" && computerSelection == "Paper")
      return ("You win!" + " " + "Scissors beats Paper!" +  " " + "Player Choice: Scissors, AI Choice: Paper " + " Your score is " + ++playerScore+ " AI score is " + compScore);
   else if (computerSelection == "Paper" && playerSelection == "Rock")
      return ("You lose!" + " " + "Paper beats Rock!" + " " +  "Player Choice: Rock, AI Choice: Paper " + " Your score is " + playerScore + " AI score is " + ++compScore);
   else if (computerSelection == "Rock" && playerSelection == "Scissors")
      return ("You lose!" + " " +  "Rock beats Scissors!" + " " + "Player Choice: Scissors, AI Choice: Rock " + " Your score is " + playerScore + " AI score is " + ++compScore);
   else if (computerSelection == "Scissors" && playerSelection == "Paper")
      return ("You lose!" + " " +  "Scissors beats Paper!" + " " + "Player Choice: Paper, AI Choice: Scissors " + " Your score is " + playerScore + " AI score is " + ++compScore);
}
//Write a function that plays 5 rounds AND KEEPS SCORE
//Set the player & comp scores outside of the function playRound this allowed the scores to be incremented each time a round was won
//Created the function game() that calls playRound() 5 times. At the end of these 5 rounds, the game() function decides a winner based on score.
let playerScore = 0;
let compScore = 0;

function playGame() {
   console.log(playRound());
   console.log(playRound());
   console.log(playRound());
   console.log(playRound());
   console.log(playRound());
   if (playerScore > compScore)
      console.log ("You won the game")
   else if (playerScore < compScore)
      console.log ("You lost the game")
   else if (playerScore == compScore)
      console.log("It\'s a tied game")

}

// Use playGame(); function within the console to activate the Rock Paper Scissors game