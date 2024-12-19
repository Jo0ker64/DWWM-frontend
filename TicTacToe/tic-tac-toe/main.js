
const X_class = "x"
const Circle_class = "circle"
const cellElements = document.querySelectorAll("[data-cell]")
const screenMessageTextElement = document.querySelector("[data-screen-message-text]")
const screenMessageElement = document.getElementById("screenMessage")
const resetButton = document.getElementById("resetButton")
const restartButton = document.getElementById("restartButton")
let circleTurn

// condition de victoire 5 lignes
const winning = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
    [15,16,17,18,19],
    [20,21,22,23,24],
    [0,5,10,15,20],
    [1,6,11,16,21],
    [2,7,12,17,22],
    [3,8,13,18,23],
    [4,9,14,19,24],
    [0,6,12,18,24],
    [4,8,12,16,20]
]

// appel de fonction reset
startGame()

// 2 boutons reset qui lance ma fonction start game
resetButton.addEventListener("click", startGame)
restartButton.addEventListener("click", startGame)


// descirption le tour n'est pas le tour cercle, 
// pour chaque class des cellules j'enleve le "x" ou "circle" / je retire la condition d'un seul click par cellule et je la remets pour reset
// j'enleve ma page de fin de jeu
function startGame(){
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove("x")
        cell.classList.remove("circle")
        cell.removeEventListener("click", handleclick)
        cell.addEventListener('click', handleclick, {once: true})
})
screenMessageElement.classList.remove("active")
}


// FONCTION à chaque clic sur cellule
// la cellule devient la cible
// est-ce que c'est au tour des cercles ? si oui currentClass= Circle_class sinon ça devient X_class
// appel de ma fonction placemark (ajout de "x" ou "circle" dans la class div cell qui modifie l'apparence)
// verif de la condition de victoire renvoie à l'ecran de fin sinon si c'est un match nul renvoie à l'ecran de fin sinon change de tour

function handleclick(e){
    const cell = e.target
    const currentClass = circleTurn ? Circle_class : X_class
    placeMark(cell,currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else{
        swapTurns()
    }
}

// fonction match nul vérifie si sur chaque cellule il y a X_class ou Circle_class

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_class) || cell.classList.contains(Circle_class)
    })
}

//fonction fin de game si c'est un match nul, affiche le 2eme ecran avec écrit "match nul" sinon affiche dans le texte le nom du joueur a gagné

function endGame(draw) {
    if(draw){
        screenMessageTextElement.innerText= "Match nul !"
    }  else{
        screenMessageTextElement.innerText = `${circleTurn ? "Joueur O" : "Joueur X"} a gagné !`
    }
    screenMessageElement.classList.add("active")
}

//fonction changement de tour, circleTurn passe de true a false ou inversement

function swapTurns(){
    circleTurn = !circleTurn
}


//fonction de modification de la class cell en lui donnant soit X_class("div class=cell x") ou Circle_class ("div class=cell circle")
function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

// fonction de win pour chaque combinaison vérifie que les combinaisons gagnantes fassent partie des combinaisons trouvables dans le [] de currentClass

function checkWin(currentClass){
    return winning.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

