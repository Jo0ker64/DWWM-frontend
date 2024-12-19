const SYM_NAMES = ["void-cell","cross-cell","circle-cell","triangle-cell","square-cell"];

let gridDimensions = [5,5];
let winCond = 3;
let playerNumber = 2;

let gameState;
let gameGrid;
let currentPlayer;

// Look if there is any complete lines
function checkGridForAlign( r, c ) {

    let range = 0;

    // Check horizontal
    for( let x = 0; x < gridDimensions[0]; x++ ) {
        range = ( gameGrid[r][x] == currentPlayer ) ? ( range + 1 ) : 0;
        if( range == winCond ) return true;
    }
    range = 0;

    // Check vertical
    for( let y = 0; y < gridDimensions[1]; y++ ) {
        range = ( gameGrid[y][c] == currentPlayer ) ? ( range + 1 ) : 0;
        if( range == winCond ) return true;
    }
    range = 0;

    // Check diagonal : up-down left-right
    for( let i = -winCond; i < winCond; i++ ) {
        let x = c + i;
        let y = r + i;
        if( x >= 0 && x < gridDimensions[0] && y >= 0 && y < gridDimensions[1] ) {
            range = ( gameGrid[y][x] == currentPlayer ) ? ( range + 1 ) : 0;
            if( range == winCond ) return true;
        } else {
            range = 0;
        }
    }
    range = 0;

    // Check diagonal : up-down right-left
    for( let i = -winCond; i < winCond; i++ ) {
        let x = c + (-i);
        let y = r + i;
        if( x >= 0 && x < gridDimensions[0] && y >= 0 && y < gridDimensions[1] ) {
            range = ( gameGrid[y][x] == currentPlayer ) ? ( range + 1 ) : 0;
            if( range == winCond ) return true;
        } else {
            range = 0;
        }
    }

    return false;
}


// Look for an empty cell in the grid, if there is one, return false
function remainingEmptyCells() {
    for( let r = 0; r < gridDimensions[1]; r++ ) {
        for( let c = 0; c < gridDimensions[0]; c++ ) {
            if( !gameGrid[r][c] )
                return true;
        }
    }
    return false;
}


// Select next player, if the last one is reached, select the first one
function nextPlayer() {
    let root = getComputedStyle(document.querySelector(":root"));
    currentPlayer = (currentPlayer+1 <= playerNumber) ? (currentPlayer+1) : 1;
    document.getElementById("playerTurn").innerHTML = "Player Turn : " + currentPlayer;
    console.log(document.getElementById("gameBackground"));
    document.getElementById("gameBackground").style.background = root.getPropertyValue( "--" + SYM_NAMES[currentPlayer] );
}


function changeCellState( row, col ) {
    // make sure selected cell is empty
    if( !gameGrid[row][col] ) {
        // set current cell state to player's ID
        gameGrid[row][col] = currentPlayer;

        // update HTML element's class to match player color
        let currentDiv = document.getElementById( "row" + row.toString() );
        let currentCell = currentDiv.children[col];
        currentCell.className = SYM_NAMES[ gameGrid[row][col] ]

        // if the player meets win conditions
        if( checkGridForAlign( row, col ) ) {
            gameState = "Victory";
            return;
        }
        
        // if the grid is full filled
        if( !remainingEmptyCells() ) {
            gameState = "Tie";
            return;
        }

        // end turn
        nextPlayer();
    }
}

function updateGame( row, col ) {
    changeCellState( row, col );
    
    switch( gameState ) {
        case "playing":
            break;
        case "Victory":
            alert("Player " + currentPlayer + " wins.");
            break;
        case "Tie":
            alert("Its a tie !");
            break;
    }
}


function emptyGrid() {
    for( let r = 0; r < gridDimensions[1]; r++ ) {
        for( let c = 0; c < gridDimensions[0]; c++ ) {
            gameGrid[r][c] = 0;
        }
    }
}

function buildGrid() {
    let htmlDiv = document.getElementById("gameDivForJS");
    gameGrid = [];

    // Loop through the rows
    for( let r = 0; r < gridDimensions[1]; r++ ) {

        // Initialize the row for JS
        gameGrid[r] = [];

        // Create a new row of cells for HTML
        let newRow = document.createElement("div");
        newRow.id = "row" + r.toString();
        newRow.className = "row";
        htmlDiv.appendChild( newRow );
        
        // Loop through the cells/columns
        for( let c = 0; c < gridDimensions[0]; c++ ) {
            
            // Initialize the cell for JS
            gameGrid[r][c] = 0;

            // Create a new cell for HTML
            let newCell = document.createElement("input");
            newCell.id = "col" + c.toString();
            newCell.type = "button";
            newCell.onclick = function(){ updateGame( r, c ) };
            newCell.className = SYM_NAMES[ gameGrid[r][c] ];
            newRow.appendChild( newCell );
        }
    }
}

function eraseGrid() {
    let htmlDiv = document.getElementById("gameDivForJS");
    htmlDiv.innerHTML = "";
    gameGrid = [];
}


function initGame() {
    gameState = 0;
    currentPlayer = 0;
    nextPlayer();
    eraseGrid();
    buildGrid();
    emptyGrid();
}


function addPlayer() {
    playerNumber++;
    if( playerNumber >= SYM_NAMES.length-1 )
        playerNumber = SYM_NAMES.length-1;

    document.getElementById("playerNumber").innerHTML = playerNumber;
}

function removePlayer() {
    playerNumber--;
    if( playerNumber < 2 )
        playerNumber = 2;

    document.getElementById("playerNumber").innerHTML = playerNumber;
}

function increaseWincon() {
    winCond++;
    winCond = ( winCond <= gridDimensions[0] ) ? winCond : gridDimensions[0];
    winCond = ( winCond <= gridDimensions[1] ) ? winCond : gridDimensions[1];
    document.getElementById("winCondition").innerHTML = winCond;
}

function decreaseWincon() {
    winCond = ( winCond - 1 > 2 ) ? ( winCond - 1 ) : 3;
    document.getElementById("winCondition").innerHTML = winCond;
}

function changeGridDimensions() {
    let htmlGridWidth = document.getElementById("gridWidthInput");
    let htmlGridHeight = document.getElementById("gridHeightInput");

    gridDimensions[0] = htmlGridWidth.value || 5;
    gridDimensions[1] = htmlGridHeight.value || 5;

    eraseGrid();
    buildGrid();
}

initGame();