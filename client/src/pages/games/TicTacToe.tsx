import { useState } from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [status, setStatus] = useState("Player X's turn");
  const [gameActive, setGameActive] = useState(true);

  const navigate = useNavigate();

  const checkWinner = (brd = board, player = currentPlayer) =>
    winConditions.some(condition =>
      condition.every(index => brd[index] === player)
    );

  const handleCellClick = (index: number) => {
    if (board[index] !== "" || !gameActive) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    if (checkWinner(newBoard, currentPlayer)) {
      setBoard(newBoard);
      setStatus(`Player ${currentPlayer} wins!`);
      setGameActive(false);
    } else if (newBoard.every(cell => cell !== "")) {
      setBoard(newBoard);
      setStatus("It's a draw ^_^");
      setGameActive(false);
    } else {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      setBoard(newBoard);
      setCurrentPlayer(nextPlayer);
      setStatus(`Player ${nextPlayer}, your turn.`);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setStatus("Player X's turn");
    setGameActive(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBar />
      <div className="flex flex-1 items-center justify-center">
        <div className="inline-block p-6 bg-white rounded shadow text-center">
          <div className="mb-4 flex justify-center gap-8">
            <button
              className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300 transition"
              onClick={resetGame}>
              PvP
            </button>
            <button
              className="px-4 py-2 bg-green-200 rounded hover:bg-green-300 transition"
              onClick={() => navigate("/TicTacToePvE")}>
              PvE
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {board.map((cell, idx) => (
              <button
                key={idx}
                className="w-20 h-20 bg-gray-50 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold hover:bg-gray-200 transition"
                onClick={() => handleCellClick(idx)}
                disabled={cell !== "" || !gameActive}
              >
                {cell}
              </button>
            ))}
          </div>
          <div className="mb-4 text-lg font-medium">{status}</div>
          <button
            className="reset-button px-6 py-2 bg-blue-100 rounded border border-blue-300 hover:bg-blue-200 transition"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}