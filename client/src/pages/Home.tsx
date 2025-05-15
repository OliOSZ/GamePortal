import NavBar from '../components/NavBar';
import GameCard from '../components/GameCard';

export default function Home() {
  const games = [
    { title: 'Tic Tac Toe', image: '/assets/tictactoe.png', link: '/TicTacToe' },
    { title: 'Game 2', image: 'https://via.placeholder.com/250x160', link: '#' },
    { title: 'Game 3', image: 'https://via.placeholder.com/250x160', link: '#' },
    { title: 'Game 4', image: 'https://via.placeholder.com/250x160', link: '#' },
  ];

  return (
    <>
      <NavBar />
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
