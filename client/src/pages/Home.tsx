import NavBar from '../components/NavBar';
import GameCard from '../components/GameCard';
import { useState } from 'react';

export default function Home() {
  const gamesDefault = [
    { title: 'Tic Tac Toe', image: '/tictactoe.png', link: '/TicTacToe' },
    { title: 'Game 2', image: '/landscape-placeholder.svg', link: '#' },
    { title: 'Game 3', image: '/landscape-placeholder.svg', link: '#' },
    { title: 'Game 4', image: '/landscape-placeholder.svg', link: '#' },
    { title: 'Game 5', image: '/landscape-placeholder.svg', link: '#' },
  ];

  const [games, setGames] = useState(gamesDefault)

  const filterGames = (searchFilter: string) => {
    setGames (gamesDefault.filter(game => game.title.toLowerCase().includes(searchFilter.toLowerCase())))
  } 

  return (
    <>
      <NavBar onSearchChanged={filterGames}/>
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </main>
    </>
  );
}
