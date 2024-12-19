const choices = ['pierre', 'caillou', 'feuille', 'lezard', 'spock'];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(playerChoice) {
  const computerChoice = computerPlay();

  if (playerChoice === computerChoice) {
    showResult("C'est un match nul !");
  } else if (
    (playerChoice === 'pierre' && (computerChoice === 'lezard' || computerChoice === 'caillou')) ||
    (playerChoice === 'caillou' && (computerChoice === 'lezard' || computerChoice === 'feuille')) ||
    (playerChoice === 'feuille' && (computerChoice === 'pierre' || computerChoice === 'spock')) ||
    (playerChoice === 'lezard' && (computerChoice === 'feuille' || computerChoice === 'spock')) ||
    (playerChoice === 'spock' && (computerChoice === 'pierre' || computerChoice === 'caillou'))
  ) {
    showResult(`Tu as gagné ! ${playerChoice} bat ${computerChoice}`);
  } else {
    showResult(`Tu as perdu ! ${computerChoice} bat ${playerChoice}`);
  }
}

function showResult(message) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = message;
}

