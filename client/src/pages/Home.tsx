import NavBar from '../components/NavBar';
import GameCard from '../components/GameCard';

export default function Home() {
  const games = [
    { title: 'Tic Tac Toe', image: '/tictactoe.png', link: '/TicTacToe' },
    { title: 'Game 2', image: '/landscape-placeholder.svg', link: '#' },
    { title: 'Game 3', image: '/landscape-placeholder.svg', link: '#' },
    { title: 'Game 4', image: '/landscape-placeholder.svg', link: '#' },
    { title: 'Game 5', image: '/landscape-placeholder.svg', link: '#' },
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
