const stayInGrid = require('./stay-in-grid');
let counter = 0;

const checkCell = (gridList, x, y, cells, gridValues) => {
  const inside = stayInGrid(gridList, x, y);

  if (!inside) return;
  if (gridValues[x][y] === 'X') return;

  const found = cells.find(cell => cell.x === x && cell.y === y);

  if (found) return;

  cells[++counter] = { x, y };
};

module.exports = checkCell;
