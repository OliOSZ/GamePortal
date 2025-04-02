import GameGrid from "@/components/GameGrid";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Navbar />
      <GameGrid />
    </main>
  );
}