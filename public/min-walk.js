import getGridValues from './helper-functions/get-grid-values.js';
import stayInGrid from './helper-functions/stay-in-grid.js';
import getCells from './helper-functions/get-cells.js';
import getSteps from './helper-functions/get-steps.js';

function minWalk(gridList, startX, startY, endX, endY) {
  const gridValues = getGridValues(gridList);

  if (!gridValues) return 'Invalid grid list';

  const insideStart = stayInGrid(gridList, startX, startY);
  const insideEnd = stayInGrid(gridList, endX, endY);

  if (!insideStart) return 'Invalid start cell';
  if (!insideEnd) return 'Invalid end cell';
  if (gridValues[startX][startY] !== '.') return 'Locked start cell';
  if (gridValues[endX][endY] !== '.') return 'Locked end cell';

  const cells = getCells(gridList, gridValues, startX, startY, endX, endY);
  
  if (!cells) return 'Impossible to reach end cell';

  return getSteps(cells);
}

export const result = minWalk(
  [
    '.X.',
    '.X.',
    '...',
  ],
  2, 1,
  0, 2
);
