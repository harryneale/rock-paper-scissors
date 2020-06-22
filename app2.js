// set opening scores
    let pScore = 0;
    let cScore = 0;
    let rounds = 1;
    

// set constants for options
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

// add event listener to each option and run round after clicked
rock.onclick = () => {
    playerChoice = 'rock';
    computerPlay();
    oneRound(playerChoice, computerChoice); 
}

paper.onclick = () => {
    playerChoice = 'paper';
    computerPlay();
    oneRound(playerChoice, computerChoice); 
}

scissors.onclick = () => {
    playerChoice = 'scissors';
    computerPlay();
    oneRound(playerChoice, computerChoice); 
}

// Generates random computer choice
    function computerPlay() {
        computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice < 0.33) {
            computerChoice = "rock";}
        else if (computerChoice <= 0.66) {
            computerChoice = "paper"}
        else {
            computerChoice = "scissors"
            }
        }

// Works out winner of round //
    let oneRound = function(playerChoice, computerChoice) {
        // Draw //
        if (playerChoice===computerChoice) {
            analysis.textContent = "Round " + rounds + ": " + playerChoice + " = " + computerChoice + " - it's a draw";
            ++rounds
            return;
            }

        // If player picks rock //
        if (playerChoice == "rock") {
            if (computerChoice == "paper") {
                cScore++
                analysis.textContent = "Round " + rounds + ": " + computerChoice + " beats " + playerChoice + ". Computer wins"
                ++rounds ;}
            else {
                pScore++
                analysis.textContent = "Round " + rounds + ": " + playerChoice + " beats " + computerChoice + ". Player wins"
                ++rounds ;
            }
        }

        // If player picks paper //
        if (playerChoice == "paper"){
            if (computerChoice == "scissors") {
                cScore++
                analysis.textContent = "Round " + rounds + ": " + computerChoice + " beats " + playerChoice + ". Computer wins"
                ++rounds;}
            else {
                pScore++
                analysis.textContent = "Round " + rounds + ": " + playerChoice + " beats " + computerChoice + ". Player wins"
                ++rounds ;
            }
        }

        // If player picks scissors //
        if (playerChoice == "scissors"){
            if (computerChoice == "rock") {
                cScore++
                analysis.textContent = "Round " + rounds + ": " + computerChoice + " beats " + playerChoice + ". Computer wins"
                ++rounds ;}
            else {
                pScore++
                analysis.textContent = "Round " + rounds + ": " + playerChoice + " beats " + computerChoice + ". Player wins"
                ++rounds ;
                }
            }
     
        if (pScore === 5) {
            }
        else if (cScore === 5) {
        }
        keepScore();
        };
        

        
// update scoreboard
const keepScore = () => {
    document.getElementById('playerScore').textContent = pScore;
    document.getElementById('computerScore').textContent = cScore;
};