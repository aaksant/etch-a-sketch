const dimensionInput = document.querySelector('#dimension');
const createGridButton = document.querySelector('.create-grid-button');
const resetButton = document.querySelector('.reset-button');

const board = document.querySelector('.board');
const gridInfo = document.querySelector('.grid-info');

function createGrid() {
  let dimension = parseInt(dimensionInput.value);

  if (dimension < 2 || dimension > 100) {
    gridInfo.textContent = '2 <= grid <= 100';
    console.log(typeof dimension);
  } else {
    board.style.setProperty('--dimension', dimension);

    for (let i = 0; i < dimension ** 2; i++) {
      let grid = document.createElement('div');
      grid.style.backgroundColor = 'white';
      board.appendChild(grid);
    }

    gridInfo.textContent = 'Grid created';
  }
}

function reset() {
  let grids = board.querySelectorAll('div');
  grids.forEach((grid) => grid.remove());

  gridInfo.textContent = 'Grid cleared'
}

createGridButton.addEventListener('click', createGrid);
resetButton.addEventListener('click', reset);