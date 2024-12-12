const searchInput = document.getElementById('searchInput');
const gameGrid = document.getElementById('gameGrid');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const games = gameGrid.querySelectorAll('.game-card');

    debugger;
    games.forEach(game => {
        const title = game.getAttribute('data-title').toLowerCase();
        if (title.includes(query)) {
            game.style.display = '';
        } else {
            game.style.display = 'none';
        }
    });
});