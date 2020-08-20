import getStepsArray from './get-steps-array.js';

// getSteps returns the number of steps to the end cell
export default function getSteps(cells) {
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

  return path[path.length - 1].steps;
}
