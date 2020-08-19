const getGridValues = gridList => {
  let gridValues = [];
  let gridRow = [];

  if (!Array.isArray(gridList)) return;

  for (let i = 0; i < gridList.length; i++) {
    gridRow = gridList[i].split('');
    gridValues[i] = [];

    if (i > 0 && gridRow.length !== gridValues[i - 1].length) return;

    for (let j = 0; j < gridRow.length; j++) {
      const gridValue = gridRow[j];

      if (gridValue !== '.' && gridValue !== 'X') return;

      gridValues[i][j] = gridValue;
    }
  }

  return gridValues;
};

module.exports = getGridValues;
