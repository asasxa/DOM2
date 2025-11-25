const field = document.getElementById('game-field');
const cells = [];

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  field.appendChild(cell);
  cells.push(cell);
}

const goblin = document.createElement('img');
goblin.src = new URL('../img/goblin.png', import.meta.url).href;
goblin.alt = 'goblin';
goblin.className = 'goblin';

let currentCellIndex = Math.floor(Math.random() * 16);
cells[currentCellIndex].appendChild(goblin);

setInterval(() => {
  let newCellIndex;
  do {
    newCellIndex = Math.floor(Math.random() * 16);
  } while (newCellIndex === currentCellIndex);

  cells[newCellIndex].appendChild(goblin);
  currentCellIndex = newCellIndex;
}, 2000);