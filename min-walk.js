const getGridValues = require('./helper-functions/get-grid-values');
const stayInGrid = require('./helper-functions/stay-in-grid');
const getCells = require('./helper-functions/get-cells');
const getSteps = require('./helper-functions/get-steps');

const minWalk = (gridList, startX, startY, endX, endY) => {
  const gridValues = getGridValues(gridList);

  if (!gridValues) {
    return 'Invalid grid list';
  }

  const insideStart = stayInGrid(gridList, startX, startY);
  const insideEnd = stayInGrid(gridList, endX, endY);

  if (!insideStart || !insideEnd) {
    return 'Invalid start and/or end cell(s)';
  }

  if (gridValues[startX][startY] !== '.' || gridValues[endX][endY] !== '.') {
    return 'Locked start and/or end cell(s)';
  }

  const cells = getCells(gridList, gridValues, startX, startY, endX, endY);
  
  if (!cells) {
    return 'Impossible to reach the end cell';
  }

  /* let str = '';
  const gridRow = gridList[0].split('');
  const maxY = gridList[0].split('').length - 1;

  for (let i = 0; i < gridList.length; i++) {
    for (let j = 0; j < gridRow.length; j++) {
      let cellIndex = cells.findIndex(cell => cell.x === i && cell.y === j);
      cellIndex = (~cellIndex) ? cellIndex : gridValues[i][j];

      if (j === maxY) str += (' ' + cellIndex).slice(-2) + '\n';
      else str += (' ' + cellIndex).slice(-2) + ' ';
    }
  }
  
  return str; */

  /* let str = '';
  const gridRow = gridList[0].split('');
  const maxY = gridList[0].split('').length - 1;
  const path = getSteps(cells);

  for (let i = 0; i < gridList.length; i++) {
    for (let j = 0; j < gridRow.length; j++) {
      let cell = path.find(cell => cell.x === i && cell.y === j);
      const steps = (cell) ? cell.steps : gridValues[i][j];

      if (j === maxY) str += (' ' + steps).slice(-2) + '\n';
      else str += (' ' + steps).slice(-2) + ' ';
    }
  }

  return str; */

  return getSteps(cells);
};

const result = minWalk(
  [
    '.........',
    '.........',
    '....X.X..',
    '......X..',
    '...X.....',
    '....X..X.',
    '.....XX..',
    '...X.X...',
    '....X..X.',
    '.XX......',
    '..XX.....',
    '...X.....',
    '.........',
  ],
  10, 1,
  1, 8
);

console.log(result);
