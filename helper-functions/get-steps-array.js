const getStepsArray = (x, y, path, stepsArray) => {
  const found = path.find(cell => cell.x === x && cell.y === y);

  if (!found || (!found.steps && found.steps !== 0)) return stepsArray;

  stepsArray.push(found.steps);
  return stepsArray;
};

module.exports = getStepsArray;
