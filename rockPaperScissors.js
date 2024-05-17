function game(input) {

    var comp = Math.random();
    var compDecision;
    var player = input;
    

    if (comp <= 0.33333) {
        compDecision = "Rock";
    } else if (comp >= 0.66666) {
        compDecision = "Scissors";
    } else {
        compDecision = "Paper"
    }
    if (player == "r") {
            if (compDecision == "Rock") {
                console.log("Draw");
            } else if (compDecision == "Paper") {
                console.log("You lose");
            } else if (compDecision == "Scissors") {
                console.log("You win");
            }
        } else if (player == "p") {
            if (compDecision == "Rock") {
                console.log("You win");
            } else if (compDecision == "Paper") {
                console.log("Draw");
            } else if (compDecision == "Scissors") {
                console.log("You lose");
            }
         } else if (player == "s") {
            if (compDecision == "Rock") {
                console.log("You lose");
            } else if (compDecision == "Paper") {
                console.log("You win");
            } else if (compDecision == "Scissors") {
                console.log("Draw");
            }
         }
    }
game('r')