const checkCell = require("./check-cell");

const getCells = (gridList, gridValues, startX, startY, endX, endY) => {
  let countingEnd = false;
  const cells = [{ x: startX, y: startY }];
  let cellNumber = 0;

  while (!countingEnd) {
    if (!cells[cellNumber]) return;

    const x = cells[cellNumber].x;
    const y = cells[cellNumber].y;
    checkCell(gridList, x - 1, y, cells, gridValues);
    checkCell(gridList, x, y + 1, cells, gridValues);
    checkCell(gridList, x + 1, y, cells, gridValues);
    checkCell(gridList, x, y - 1, cells, gridValues);
    checkCell(gridList, x - 1, y - 1, cells, gridValues);
    checkCell(gridList, x - 1, y + 1, cells, gridValues);
    checkCell(gridList, x + 1, y + 1, cells, gridValues);
    checkCell(gridList, x + 1, y - 1, cells, gridValues);

    const last = cells.find(cell => cell.x === endX && cell.y === endY);

    if (last) countingEnd = true;

    cellNumber++;
  }

  return cells;
};

module.exports = getCells;
