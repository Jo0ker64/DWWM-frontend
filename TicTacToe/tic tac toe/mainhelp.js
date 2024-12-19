// déclare le symbole
let premierJoueur = "x";
// declare la variable pour montrer que le jeu n'est pas terminé quand on l'apelle
let jeuFinis = false; 
let coupsJoues = 0;
// Permet de déclarer les positions gagnantes avec les id dans le html
let winPos = [
    [1, 2, 3, 4, 5], 
    [6, 7, 8, 9, 10], 
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20], 
    [21, 22, 23, 24, 25], 
    [1, 6, 11, 16, 21], 
    [2, 7, 12, 17, 22], 
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24], 
    [5, 10, 15, 20, 25],
    [1, 7, 13, 19, 25], 
    [5, 9, 13, 17, 21]
  ];
//   Permet de cliquer sur les cellules et ajouter les symboles
//  ajout d'événements de clic à 25 éléments pour rajouter les X ou O avec if et else
for (let i = 1; i <= 25; i++) {
    document.getElementById(i.toString()).addEventListener("click", 
    function() {
// Permet de verifier si la case ou on clique est vide et que une fois fait la game n'est pas terminé avec le gameEnded
      if (this.innerHTML === "" && !jeuFinis) {
// Rajoute les symboles dans les cases avec le innerHTML( le innerHTML permet de modifier ou recuperer le contenue html)
        this.innerHTML = premierJoueur;
        this.classList.add(premierJoueur);
        coupsJoues++;
        checkWin();
        if (premierJoueur === "x") {
          premierJoueur = "o";
        } else {
          premierJoueur = "x";
        }
// Pour rajouter la condition match nul si les 25 cases sont utilisées (!=non et &&= Et logique si les deux conditions sont remplis)
        if (coupsJoues === 25 && !jeuFinis) {
          jeuFinis = true;
          setTimeout(function() {
          alert("Match nul !")}, 300);
        }
      }
    });
  }
  /* */
//détermine le joueur gagnant en vérifiant les symboles contenus dans les cases gagnantes
function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
        // me déclarele "symbols"utilisant la méthode map qui parcourt chaque position pos dans winPos et récupère le contenu HTML de l'élément correspondant à chaque position
      let symbols = winPos[i].map(pos => document.getElementById(pos).innerHTML);
    //   Si les symboel gagnant son x ça me marquera le massage avec x
      if (symbols.every(symbol => symbol === "x")) {
        marqueWin(winPos[i]);
        joueurGagnant("x");
        // meme chose que dessus avec le o
      } else if (symbols.every(symbol => symbol === "o")) {
        marqueWin(winPos[i]);
        joueurGagnant("o");
      }
    }
  }
//Permet de reset en selectionnant l'id du bouton et enleve tous les symboles
  document.getElementById("reset").addEventListener(
    "click", 
    function gameReset() {
// La boucle for permet de supprimer tous les element dans les cases jusqu'a l'id 25 en remplacant les classes et supprimant les signes
      for (let i = 1; i <= 25; i++) {
        document.getElementById(i.toString()).innerHTML = "";
        document.getElementById(i.toString()).classList.remove("x");
        document.getElementById(i.toString()).classList.remove("o");
        document.getElementById(i.toString()).classList.remove("win");
        jeuFinis = false;
        premierJoueur = "x";
        coupsJoues = 0; //Reinitialise l'etat du jeu
      }
    }
  );
// permet de modifier les cases gagnantes par l'id win ce qui me permet de definir dans le css un style visuel
  function marqueWin(cells) {
    cells.forEach(pos => document.getElementById(pos).classList.add("win"));
  }
//   Permet d'afficher le bon symbole de la personne qui gagne la partie avec le message
  function joueurGagnant(winner) {
    jeuFinis = true;
    // setTimeout me permet de rajouter un delais de fenetre
    setTimeout(function() {
      alert(winner + " Victoire !");
    }, 200);
  }