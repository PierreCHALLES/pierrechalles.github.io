let score = 0;
let gameInterval;
const gameArea = document.getElementById('game-area');
const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

function getRandomPosition() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    const x = Math.floor(Math.random() * (gameAreaRect.width - square.offsetWidth));
    const y = Math.floor(Math.random() * (gameAreaRect.height - square.offsetHeight));
    return { x, y };
}

function moveSquare() {
    const { x, y } = getRandomPosition();
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
    square.style.display = 'block';
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startButton.disabled = true;
    gameInterval = setInterval(moveSquare, 1000);
    square.addEventListener('click', increaseScore);
}

function stopGame() {
    clearInterval(gameInterval);
    square.style.display = 'none';
    startButton.disabled = false;
    square.removeEventListener('click', increaseScore);
}

function increaseScore() {
    score += 1;
    scoreDisplay.textContent = score;
}

startButton.addEventListener('click', startGame);
gameArea.addEventListener('click', (event) => {
    if (event.target !== square) {
        stopGame();
    }
});
