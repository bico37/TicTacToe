let grid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
]
let player1char = ""
let player2char = ""

let playersTurn = 0;
let player1Add = 1;
let player2Add = 10;

let player1Name = ""
let player2Name = ""

let winner = ""
let flower1 = ""
let flower2 = ""

let score1 = 0;
let score2 = 0;

let song = new Audio('Sound/click.mp3');
//FLOWER
// Player1
function flower1Rose(){
    flower1 = "rose"

    document.getElementById('P1flower1').style.opacity = '100%'
    document.getElementById('P1flower2').style.opacity = '60%'
    document.getElementById('P1flower3').style.opacity = '60%'
}
function flower1Sun(){
    flower1 = "sonnenblume"

    document.getElementById('P1flower1').style.opacity = '60%'
    document.getElementById('P1flower2').style.opacity = '100%'
    document.getElementById('P1flower3').style.opacity = '60%'
}
function flower1Tulp(){
    flower1 = "tulpe"

    document.getElementById('P1flower1').style.opacity = '60%'
    document.getElementById('P1flower2').style.opacity = '60%'
    document.getElementById('P1flower3').style.opacity = '100%'
}
// player2
function flower2Rose(){
    flower2 = "rose"

    document.getElementById('P2flower1').style.opacity = '100%'
    document.getElementById('P2flower2').style.opacity = '60%'
    document.getElementById('P2flower3').style.opacity = '60%'
}
function flower2Sun(){
    flower2 = "sonnenblume"

    document.getElementById('P2flower1').style.opacity = '60%'
    document.getElementById('P2flower2').style.opacity = '100%'
    document.getElementById('P2flower3').style.opacity = '60%'
}
function flower2Tulp(){
    flower2 = "tulpe"

    document.getElementById('P2flower1').style.opacity = '60%'
    document.getElementById('P2flower2').style.opacity = '60%'
    document.getElementById('P2flower3').style.opacity = '100%'
}

document.querySelector('#player1Name h4').style.color = "green"
function boxclicked(box,x,y){
    
    if (flower1 == flower2){
        alert("It's not possible to choose the same character")
        return
    }   
    if(grid[x][y] >= 0){
        alert("This field is already filled!")
        return;
    }

    playSound();

    if(playersTurn%2 == 0){
        grid[x][y] = player1Add
        document.querySelector('#player2Name h4').style.color = "green"
        document.querySelector('#player1Name h4').style.color = "black"
    } else if(playersTurn%2 == 1){
        grid[x][y] = player2Add
        document.querySelector('#player1Name h4').style.color = "green"
        document.querySelector('#player2Name h4').style.color = "black"
    }

    if (grid[x][y] == player1Add) {
        box.innerHTML = `<img src="./img/${flower1}.png" alt="" width="20">`;
    } else if (grid[x][y] == player2Add) {
        box.innerHTML = `<img src="./img/${flower2}.png" alt="" width="20">`;
    }

    checkWinner();

    if(winner == "Player 1" || winner == "Player 2"){
        winnerFound();
    }

    playersTurn = playersTurn + 1;  
}

function checkWinner() {
    //wertikale
    // 1. Zeile
        if (grid[0][0] + grid[0][1] + grid[0][2] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[0][0] + grid[0][1] + grid[0][2] == player2Add*3) {
            winner = "Player 2";
        }

        // 2. Zeile
        if (grid[1][0] + grid[1][1] + grid[1][2] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[1][0] + grid[1][1] + grid[1][2] == player2Add*3) {
            winner = "Player 2";
        }

        // 3. Zeile
        if (grid[2][0] + grid[2][1] + grid[2][2] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[2][0] + grid[2][1] + grid[2][2] == player2Add*3) {
            winner = "Player 2";
        }

        // 1. Spalte
        if (grid[0][0] + grid[1][0] + grid[2][0] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[0][0] + grid[1][0] + grid[2][0] == player2Add*3) {
            winner = "Player 2";
        }

        // 2. Spalte
        if (grid[0][1] + grid[1][1] + grid[2][1] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[0][1] + grid[1][1] + grid[2][1] == player2Add*3) {
            winner = "Player 2";
        }

        // 3. Spalte
        if (grid[0][2] + grid[1][2] + grid[2][2] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[0][2] + grid[1][2] + grid[2][2] == player2Add*3) {
            winner = "Player 2";
        }

        // 1. Diagonale
        if (grid[0][0] + grid[1][1] + grid[2][2] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[0][0] + grid[1][1] + grid[2][2] == player2Add*3) {
            winner = "Player 2";
        }

        // 2. Diagonale
        if (grid[0][2] + grid[1][1] + grid[2][0] == player1Add*3) {
            winner = "Player 1";
        } else if (grid[0][2] + grid[1][1] + grid[2][0] == player2Add*3) {
            winner = "Player 2";
        }   

        if (playersTurn == 8 && winner =="") {
            winner = "Draw";
            winnerFound();
        }

    readOutName();
}

function winnerFound(){
    document.getElementById('winnerFound').style.display = "inline";

    if(winner == "Player 1"){
        document.getElementById('playerw').innerHTML = `<p>${player1Name} has won</p>`;
        score1++;
    } else if (winner == "Player 2"){
        document.getElementById('playerw').innerHTML = `<p>${player2Name} has won</p>`;
        score2++;
    } else if(winner == "Draw"){
        document.getElementById('playerw').innerHTML = `<p>Draw!</p>`;
    }

    document.getElementById('score').innerHTML = 
    `<h5>Score:</h5>
    <p>${player1Name} Score: ${score1}</p>
    <p>${player2Name} Score: ${score2}</p>`


    playersTurn = -1
    winner = ""
    flower1 = ""
    flower2 = ""

    document.getElementById('P1flower1').style.opacity = '100%'
    document.getElementById('P1flower2').style.opacity = '100%'
    document.getElementById('P1flower3').style.opacity = '100%'

    document.getElementById('P2flower1').style.opacity = '100%'
    document.getElementById('P2flower2').style.opacity = '100%'
    document.getElementById('P2flower3').style.opacity = '100%'
}


// NAMEN AUSLESEN
function readOutName(){
    player1Name = document.getElementById('nameOfPlayer1').value;
    player2Name = document.getElementById('nameOfPlayer2').value;
}

//Play Again
function playAgain(){
    document.getElementById('winnerFound').style.display = "none";

    for (let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            grid[i][j] = -1
        }
    }

    document.getElementById('box1').innerHTML = ''
    document.getElementById('box2').innerHTML = ''
    document.getElementById('box3').innerHTML = ''
    document.getElementById('box4').innerHTML = ''
    document.getElementById('box5').innerHTML = ''
    document.getElementById('box6').innerHTML = ''
    document.getElementById('box7').innerHTML = ''
    document.getElementById('box8').innerHTML = ''
    document.getElementById('box9').innerHTML = ''

    document.querySelector('#player1Name h4').style.color = "green"
    document.querySelector('#player2Name h4').style.color = "black"
}

//END GAME
function endGame(){

    document.getElementById('playerw').style.display = 'none'
    document.getElementById('playAgain').style.display = 'none'
    document.getElementById('endGame').style.display = 'none'
    document.getElementById('goBackToStart').style.display = 'inline'
}

function goBackToStart() {
    location.reload();
}
//Play sound
function playSound(){
    song.play();
}