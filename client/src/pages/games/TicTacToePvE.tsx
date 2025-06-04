import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";


const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6], 
];

type Score = {
  wins: number;
  losses: number;
  draws: number;
}

export default function TicTacToePvE() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("Your turn (X)");
  const [currentPlayer] = useState("X");
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState<Score>({ wins: 0, losses: 0, draws: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    const savedScore = localStorage.getItem("ticTacToeScore");
    if (savedScore) {
      setScore(JSON.parse(savedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ticTacToeScore", JSON.stringify(score));  
  }, [score]);

  const checkWinner = (brd = board, player = currentPlayer) =>
    winConditions.some(condition =>
      condition.every(index => brd[index] === player)
    );

  const easyMove = (brd: any[]) => {
    const empty = brd.map((cell: string, i: any) => cell === "" ? i : null).filter((i: null) => i !== null);
    if (empty.length === 0) return brd;
    const move = empty[Math.floor(Math.random() * empty.length)];
    const newBoard = [...brd];
    newBoard[move] = "O";
    return newBoard;
  };

const updateScore = (result: "win" | "loss" | "draw") => {
  setScore(prev => ({
    wins: prev.wins + (result === "win" ? 1 : 0),
    losses: prev.losses + (result === "loss" ? 1 : 0),
    draws: prev.draws + (result === "draw" ? 1 : 0),
  }));
};

  const handleCellClick = (index: number) => {
    if (board[index] !== "" || !gameActive) return;

    let newBoard = [...board];
    newBoard[index] = "X";

    if (checkWinner(newBoard, "X")) {
      setBoard(newBoard);
      setStatus("You win!");
      updateScore("win")
      setGameActive(false);
      return;
    }

    if (newBoard.every(cell => cell !== "")) {
      setBoard(newBoard);
      setStatus("It's a draw!");
      updateScore("draw")
      setGameActive(false);
      return;
    }

    setBoard(newBoard);
    setStatus("Bot is thinking");
    setGameActive(false);

    const delay = Math.floor(Math.random() *(2000 - 200 + 1)) + 200;

    setTimeout(() => {
      newBoard = easyMove(newBoard);


    if (checkWinner(newBoard, "O")) {
      setBoard(newBoard);
      setStatus("Bot wins!");
      updateScore("loss")
      setGameActive(false);
      return;
    }

    if (newBoard.every(cell => cell !== "")) {
      setBoard(newBoard);
      setStatus("It's a draw!");
      updateScore("draw")
      setGameActive(false);
      return;
    }

    setBoard(newBoard);
    setStatus("Your turn (X)");
    setGameActive(true);
    }, delay);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setStatus("Your turn (X)");
    setGameActive(true);
  };

  return (
     <div className="min-h-screen bg-gray-100 flex flex-col">
          <NavBar />
          <div className="flex flex-1 items-center justify-center">
            <div className="inline-block p-6 bg-white rounded shadow text-center">
                <p className="">PvE</p>
              <div className="mb-4 flex justify-center gap-8">
                <button
                  className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300 transition"
                  onClick={() => navigate("/TicTacToe")}>
                  PvP
                </button>
                <button
                  className="px-4 py-2 bg-green-200 rounded hover:bg-green-300 transition"
                  onClick={resetGame}>
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
              <div className="">
                Score: Wins: {score.wins} | Losses: {score.losses} | Draws: {score.draws}
              </div>
            </div>
          </div>
        </div>
  );
}
