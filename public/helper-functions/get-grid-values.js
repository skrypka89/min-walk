// gridValues is a two-dimensional array with input data (grid)
export default function getGridValues(gridList) {
  let gridValues = [];
  let gridRow = [];

  if (!Array.isArray(gridList)) return;
  if (gridList.length === 1 || gridList.length >= 100) return;

  for (let i = 0; i < gridList.length; i++) {
    gridRow = gridList[i].split('');
    gridValues[i] = [];

    if (gridRow.length !== gridList.length) return;
    if (i > 0 && gridRow.length !== gridValues[i - 1].length) return;

    for (let j = 0; j < gridRow.length; j++) {
      const gridValue = gridRow[j];

      if (gridValue !== '.' && gridValue !== 'X') return;

      gridValues[i][j] = gridValue;
    }
  }

  return gridValues;
}
