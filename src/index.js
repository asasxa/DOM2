import './css/style.css';
import './js/game.js';

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});

window.addEventListener('beforeunload', () => {
  stopGame();
});