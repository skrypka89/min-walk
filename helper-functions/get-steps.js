const getStepsArray = require("./get-steps-array");

const getSteps = cells => {
  const path = [...cells];
  path[0].steps = 0;

  for (let i = 1; i < path.length; i++) {
    const x = path[i].x;
    const y = path[i].y;
    let stepsArray = [];
    stepsArray = getStepsArray(x - 1, y, path, stepsArray);
    stepsArray = getStepsArray(x, y + 1, path, stepsArray);
    stepsArray = getStepsArray(x + 1, y, path, stepsArray);
    stepsArray = getStepsArray(x, y - 1, path, stepsArray);
    stepsArray = getStepsArray(x - 1, y - 1, path, stepsArray);
    stepsArray = getStepsArray(x - 1, y + 1, path, stepsArray);
    stepsArray = getStepsArray(x + 1, y + 1, path, stepsArray);
    stepsArray = getStepsArray(x + 1, y - 1, path, stepsArray);
    path[i].steps = Math.min(...stepsArray) + 1;
  }

  // return path;

  return path[path.length - 1].steps;
};

module.exports = getSteps;
