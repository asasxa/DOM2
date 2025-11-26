import './css/style.css';
import { startGame, stopGame } from './js/game.js';

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});

window.addEventListener('beforeunload', () => {
  stopGame();
});