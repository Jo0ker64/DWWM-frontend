const grid = document.querySelector('.grid');
const boxs = document.querySelectorAll('.box');
const turn = document.querySelector('.turn');
const head = document.querySelector('.head');
let xIsNext = true;

// déclaration des lignes 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  return null;
}

class Morpion {
  constructor(grid, boxs, head, turn) {
    this.grid = grid;
    this.boxs = boxs;
    this.head = head;
    this.turn = turn;
    this.squares = Array(9).fill(null) ;
    this.player = 'X';
  }
  
  round(i) {
    xIsNext ? this.player = 'X' : this.player = 'O';
    xIsNext = !xIsNext;
    this.turn.innerHTML = this.player
    if (i === undefined) { return; }
   
    const boxes = this.squares.slice();
    boxes[i] = xIsNext ? 'X' : 'O';
    this.squares = boxes;
    
    this.boxs[i].innerHTML = boxes[i]; 
    
    if (calculateWinner(boxes) != null) {
      const winner = calculateWinner(boxes);
      this.head.innerHTML = `${winner} gagne !`;
    }
  }
}

const morpion = new Morpion(grid, boxs, head, turn);

window.addEventListener('DOMContentLoaded', () => {
  morpion.round()
}); 

boxs.forEach((box, i) => box.addEventListener('click', () => {
  if (box.innerHTML === 'X' || box.innerHTML === 'O') { return }; // If box already clicked we stop the function  //Si la case est déjà cochée, nous arrêtons la fonction
  if (calculateWinner(morpion.squares) != null) { return };       // If game over we stop the function // si le jeu est fini on arrete la fonction
  morpion.round(i);
}));






