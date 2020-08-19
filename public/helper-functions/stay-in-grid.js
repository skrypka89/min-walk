export default function stayInGrid(gridList, x, y) {
  const maxX = gridList.length - 1;
  const maxY = gridList[0].split('').length - 1;

  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  if (x < 0 || x > maxX) return false;
  if (y < 0 || y > maxY) return false;

  return true;
}
