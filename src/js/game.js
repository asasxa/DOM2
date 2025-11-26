let gameInterval = null;

const createGameField = () => {
  const field = document.getElementById('game-field');
  field.innerHTML = '';
  const cells = [];
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    field.append(cell);
    cells.push(cell);
  }
  return cells;
};

let goblin = null;
const createGoblin = () => {
  if (!goblin) {
    goblin = document.createElement('img');
    goblin.src = new URL('../img/goblin.png', import.meta.url).href;
    goblin.alt = 'goblin';
    goblin.className = 'goblin';
  }
  return goblin;
};

export const startGame = () => {
  if (gameInterval) return;

  const cells = createGameField();
  const goblinEl = createGoblin();

  let currentCellIndex = Math.floor(Math.random() * 16);
  cells[currentCellIndex].append(goblinEl);

  gameInterval = setInterval(() => {
    let newCellIndex;
    do {
      newCellIndex = Math.floor(Math.random() * 16);
    } while (newCellIndex === currentCellIndex);

    cells[newCellIndex].append(goblinEl);
    currentCellIndex = newCellIndex;
  }, 2000);
};

export const stopGame = () => {
  if (gameInterval) {
    clearInterval(gameInterval);
    gameInterval = null;
  }
};