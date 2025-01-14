document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    let currentPlayer = "X"
    let board = ["", "", "", "", "", "", "", "", ""];
    let gameActive = true;

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

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = parseInt(cell.getAttribute("data-index"));

        if (board[cellIndex] !== "" || !gameActive) return;

        board[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner()) {
            statusText.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            statusText.textContent = "It's a draw!";
            gameActive = false;
            } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusText.textContent = `Player ${currentPlayer}, your turn.`;
        }
    }

    function checkWinner() {
        return winningConditions.some(condition => {
            return condition.every(index => board[index] === currentPlayer);
        });
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
      gameActive = true;
      currentPlayer = "X";
      cells.forEach(cell => (cell.textContent = ""));
      statusText.textContent = `Player X's turn`;
    }
  
    // legger til click på celler
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
  
    // reseter game'et når du kilker på de nevnte under
    document.getElementById("pvp").addEventListener("click", resetGame);
    document.getElementById("pve").addEventListener("click", resetGame);
    document.getElementById("reset-button").addEventListener("click", resetGame);
  });