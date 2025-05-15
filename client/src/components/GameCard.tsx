import { Game } from "@/types";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <div className="rounded-xl border p-4 shadow-md hover:bg-gray-50">
      <h2 className="text-lg font-bold">{game.title}</h2>
      <p>{game.genre}</p>
    </div>
  );
}
