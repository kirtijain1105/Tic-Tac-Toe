const statusDisplay = document.querySelector('.game--status');
var gameState=["","","","","","","","","",];
var currentPlayer="X";
var gameActive=true;
const drawMessage = () => `Game ended in a draw!`;
var roundWon=false;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();

function handleCellClick(clickedCellEvent){
const clickedCell = clickedCellEvent.target;
let clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  );

  if(gameState=="" && !gameActive){
      return
  }
  handleCellPlayed(clickedCell,clickedCellIndex);
  updateGameStateWithCurrentPlayerValue(clickedCellIndex);
  
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function updateGameStateWithCurrentPlayerValue(clickedCellIndex){
    gameState[clickedCellIndex]=currentPlayer;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i=0;i<=7;i++){
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }

        let test = "fake fcs ehvfhcg d fsmfss djjfsfjs"
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    setNextPlayer();
}

function winningMessage(){
    return `${currentPlayer} has won the tic-toe-match`;
}

function setNextPlayer(){
    currentPlayer = currentPlayer=="X" ? "0":"X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
