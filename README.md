# rock-paper-scissors
A rock paper scissors application using basic JavaScript.

This program gave me a chance to put the following practices to work:
Functions, Pseudocode, Arrays, Conditional Satements.

Some challenges faced during this project:
 - Computer move choices. This was achieved using arrays, and methods.
 - Making it possible for the user to make a new play each round. I initially had the prompt for userPlay set outside of the playRound function (in the global scope). This caused an issue when I wanted to call playRound 5 times for a full game. The computer would be able to make a new move, but the user was only able to enter one move for all 5 rounds. Once I placed the userPlay prompt within the playRound function I got the results I wanted.
 - Scoring. Eventually found a way to keep track of score by incrementing each time either the player, or computer won a round within playRound. Then within the playGame function I used conditional statements to determine who won based on the cumulative score of 5 rounds played.


Things I've taken away from this project:
 - Persistence is key. There were times when frustration would creep in, and if I had given up I wouldn't have been able to finish.
 - Pay attention to where you're placing things within the local or global scope. This is simple but can lead to big problems.