// tic tac toe game 
let playerX = true;
let playerO = false;
let items = document.querySelectorAll('.item');
let turnTeller = document.querySelector('.turnteller');
turnTeller.innerHTML = "Game is ready to play...<br>Now X's turn.";
let resetBtn = document.getElementById('resetBtn');
let clickedItemIndex = [];
let board = ['', '', '', '', '', '', '', '', ''];
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let indexesOfElements = document.querySelectorAll("[data-index]");

for (let item of items) {
        item.addEventListener('click', () => {
            if(item.innerHTML != '') {
                item.style.pointerEvents = 'none';
            } else {
                if (playerX && !playerO) {
                    item.innerHTML = 'X';
                    item.style.color = '#ff4400';
                    playerX = false;
                    playerO = true;
                    clickedItemIndex.push('X')
                    turnTeller.innerHTML = "Now O's turn.";
                } else if (playerO && !playerX) {
                    item.innerHTML = 'O';
                    item.style.color = 'wheat';
                    playerO = false;
                    playerX = true;
                    clickedItemIndex.push('O');
                    turnTeller.innerHTML = "Now X's turn.";
                }
            }
            for(let i = 0; i < clickedItemIndex.length; i++) {
                    board[i] = clickedItemIndex[i];
                    if(!board.includes('')) {
                        turnTeller.innerHTML = 'Game draw !';
                    }
            };
        });
    }



for(let pattern of winningPattern) {
    if(clickedItemIndex == pattern){
        if(playerX != true) {
            turnTeller.innerHTML = 'Player X won'
        } else if(playerO != true) {
            turnTeller.innerHTML = 'Player O won';
        } else {

        }
    }
}





// reset button
resetBtn.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    for(let item of items) {
        // item.innerHTML = '';
        item.textContent = '';
    }
    clickedItemIndex = [];
    for(let i = 0; i< board.length; i++) {
        board[i] = '';
    }
    playerX = true;
    playerO= false;
    turnTeller.innerHTML = "Reset successful !<br>Game is ready to play...";
    setTimeout(() => {
        turnTeller.innerHTML = "Now X's turn."
    }, 1500);
})
