'use client'
import { useState } from "react";
import styles from "@/styles/GameGrid.module.css";

const allGames = [
  { id: 1, title: "Tic Tac Toe", image: "/Tictactoe.jpg", link: "/TTT" },
  { id: 2, title: "Game 2", image: "https://via.placeholder.com/250x160", link: "#" },
  { id: 3, title: "Game 3", image: "https://via.placeholder.com/250x160", link: "#" },
  { id: 4, title: "Game 4", image: "https://via.placeholder.com/250x160", link: "#" },
];

export default function GameGrid() {
  const [search, setSearch] = useState("");

  const filteredGames = allGames.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search games..."
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.gameGrid}>
        {filteredGames.map((game) => (
          <div key={game.id} className={styles.gameCard}>
            <h3>{game.title}</h3>
            <a href={game.link}>Spill</a>
          </div>
        ))}
      </div>
    </>
  );
}
