// tic tac toe game
let playerX = true;
let playerO = false;
let items = document.querySelectorAll(".item");
let turnTeller = document.querySelector(".turnteller");
let resetBtn = document.getElementById("resetBtn");
let clickedItemIndex = [];
let board = ["", "", "", "", "", "", "", "", ""];
let checker = ["", "", "", "", "", "", "", "", ""];
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
let winnerX = false;
let winnerO = false;
let arrX = []; // x clicked index's numbers will be saved here
let arrO = []; // o clicked index's numbers will be saved here

turnTeller.innerHTML = "Game is ready to play...<br>Now X's turn.";
// for (let item of items) {
for (let i = 0; i < items.length; i++) {
  let item = items[i];
  item.addEventListener("click", () => {
    if (item.innerHTML != "") {
      item.style.pointerEvents = "none";
    } else {
      if (playerX && !playerO) {
        item.innerHTML = "X";
        item.style.color = "#ff4400";
        playerX = false;
        playerO = true;
        clickedItemIndex.push("X");
        for (let j = 0; j < 9; j++) {
          let temp = "item";
          temp = temp + j;
          if (temp == item.id) {
            arrX.push(j);
          } else {
          }
        }
        for (let pattern of winningPattern) {
          // Check if every number in the current pattern exists in temp
          if (pattern.every((num) => arrX.includes(num))) {
            winnerX = true; // Mark as a winner
            break; // Stop further checks as we only need one match
          }
        }
        if (winnerX == true) {
          turnTeller.innerHTML = "X is Winner !";
          // items.style.pointerEvents = 'none'
          disable();
        } else {
          turnTeller.innerHTML = "Now O's turn.";
        }
      } else if (playerO && !playerX) {
        item.innerHTML = "O";
        item.style.color = "wheat";
        playerO = false;
        playerX = true;
        clickedItemIndex.push("O");
        for (let j = 0; j < 9; j++) {
          let temp = "item";
          temp = temp + j;
          if (temp == item.id) {
            arrO.push(j);
          } else {
          }
        }
        for (let pattern of winningPattern) {
          // Check if every number in the current pattern exists in temp
          if (pattern.every((num) => arrO.includes(num))) {
            winnerO = true; // Mark as a winner
            break; // Stop further checks as we only need one match
          }
        }
        if (winnerO == true) {
          turnTeller.innerHTML = "O is Winner !";
          // items.style.pointerEvents = 'none'
          disable();
        } else {
          turnTeller.innerHTML = "Now X's turn.";
        }
      }
    }

    // ckeck for draw
    for (let i = 0; i < clickedItemIndex.length; i++) {
      board[i] = clickedItemIndex[i];
      if (!board.includes("")) {
        turnTeller.innerHTML = "Game draw !";
      }
    }
  });
}

function disable() {
  items.forEach((index) => {
    index.style.pointerEvents = "none";
  });
}

resetBtn.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  for (let item of items) {
    // item.innerHTML = '';
    item.textContent = "";
  }
  clickedItemIndex = [];
  for (let i = 0; i < board.length; i++) {
    board[i] = "";
  }
  playerX = true;
  playerO = false;
  winnerX = false;
  winnerO = false;
  arrX = [];
  arrO = [];
  for (let item of items) {
    item.style.pointerEvents = "auto";
  }
  turnTeller.innerHTML = "Reset successful !<br>Game is ready to play...";
  setTimeout(() => {
    turnTeller.innerHTML = "Now X's turn.";
  }, 1500);
});

// resetBtn.addEventListener("click", () => {
//   // Clear the board
//   items.forEach(item => {
//     item.textContent = ""; // Clear content
//     item.style.pointerEvents = "auto"; // Re-enable clicks
//   });

//   // Reset game variables
//   clickedItemIndex = [];
//   board = ["", "", "", "", "", "", "", "", ""];
//   arrX = []; // Clear X's indices
//   arrO = []; // Clear O's indices
//   playerX = true;
//   playerO = false;
//   winnerX = false;
//   winnerO = false;

//   // Update the turn indicator
//   turnTeller.innerHTML = "Reset successful!<br>Game is ready to play...";
//   setTimeout(() => {
//     turnTeller.innerHTML = "Now X's turn.";
//   }, 1500);
// });
