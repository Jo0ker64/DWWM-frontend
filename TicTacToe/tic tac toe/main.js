let premierJoueur = "x";
let jeuFinis = false; 
let coupsJoues = 0;
let winPos = [
    [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20], [21, 22, 23, 24, 25], [1, 6, 11, 16, 21], 
    [2, 7, 12, 17, 22], [3, 8, 13, 18, 23],[4, 9, 14, 19, 24], 
    [5, 10, 15, 20, 25],[1, 7, 13, 19, 25], [5, 9, 13, 17, 21]
  ];
for (let i = 1; i <= 25; i++) {
    document.getElementById(i.toString()).addEventListener("click", 
    function() {
      if (this.innerHTML === "" && !jeuFinis) {
        this.innerHTML = premierJoueur;
        this.classList.add(premierJoueur);
        coupsJoues++;
    checkWin();
        if (premierJoueur === "x") {
          premierJoueur = "o";
        } else {
          premierJoueur = "x";
        }
        if (coupsJoues === 25 && !jeuFinis) {
          jeuFinis = true;
          setTimeout(function() {
          alert("Match nul !")}, 300);
        }
      }
    });
  }
  document.getElementById("reset").addEventListener(
    "click", 
    function gameReset() {
      for (let i = 1; i <= 25; i++) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("x");
        document.getElementById(i.toString()).classList.remove("o");
        document.getElementById(i.toString()).classList.remove("win");
        jeuFinis = false;
        premierJoueur = "x";
        coupsJoues = 0;
      }
    }
  );
  function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
      let symbols = winPos[i].map(pos => document.getElementById(pos).innerHTML);
      if (symbols.every(symbol => symbol === "x")) {
        marqueWin(winPos[i]);
        joueurGagnant("1");
      } else if (symbols.every(symbol => symbol === "o")) {
        marqueWin(winPos[i]);
        joueurGagnant("2");
      }
    }
  }
  function marqueWin(cells) {
    cells.forEach(pos => document.getElementById(pos).classList.add("win"));
  }
  function joueurGagnant(winner) {
    jeuFinis = true;
    setTimeout(function() {
      alert( "Victoire du Joueur " +winner+ " !");
    }, 200);
  }