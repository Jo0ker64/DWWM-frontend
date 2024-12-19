let wins = 0; let loses = 0;
const choices = ["papier", "caillou", "ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const well = document.getElementById("well");

function runGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  switch(userChoice + '_' + computerChoice) {
    case 'papier_ciseaux':
    case 'caillou_puit':
    case 'ciseaux_caillou':
    case 'ciseaux_puit':
    case 'puit_papier':
    case 'caillou_puit': 
      loses += 1;
      gameStatus.innerHTML = `H: ${userChoice} | IA: ${computerChoice} -> IA Wins`
      break;
    case 'papier_caillou':
    case 'caillou_papier':
    case 'caillou_ciseaux':
    case 'ciseaux_papier':
    case 'puit_caillou':
    case 'puit_ciseaux': 
    case 'papier_puit': 
    case 'puit_papier' :
      wins += 1;
      gameStatus.innerHTML = `H: ${userChoice} | IA: ${computerChoice} -> H Wins`
      break;
    case 'papier_papier':
    case 'caillou_caillou':
    case 'ciseaux_ciseaux':
    case 'puit_puit':
      gameStatus.innerHTML = `H: ${userChoice} | IA: ${computerChoice} -> Egalité`
      break;
  }

  gameScore.innerHTML = `H: ${wins} | IA: ${loses}`;
}

paper.addEventListener("click", () => runGame("papier"));
rock.addEventListener("click", () => runGame("caillou"));
scissors.addEventListener("click", () => runGame("ciseaux"));
well.addEventListener("click", () => runGame("puit"));