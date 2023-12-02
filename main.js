const dimensionInput = document.querySelector('#dimension');
const createGridButton = document.querySelector('.create-grid-button');
const resetButton = document.querySelector('.reset-button');
const blackButton = document.querySelector('.black-btn');
const randomButton = document.querySelector('.random-color-btn');
const eraserButton = document.querySelector('.eraser');

const board = document.querySelector('.board');
const gridInfo = document.querySelector('.grid-info');

function createGrid() {
  let dimension = parseInt(dimensionInput.value);

  if (dimension < 2 || dimension > 100) {
    gridInfo.textContent = 'Input must be between 2 and 100, include.';
  } else {
    board.style.setProperty('--dimension', dimension);
    gridInfo.textContent = 'Grid created. Please select color mode.';

    for (let i = 0; i < dimension ** 2; i++) {
      let grid = document.createElement('div');
      board.appendChild(grid);
    }
  }
}

function reset() {
  let grids = board.querySelectorAll('div');
  grids.forEach((grid) => grid.remove());

  dimensionInput.value = '';
  gridInfo.textContent = 'Grid cleared.'
}

function fillBlack() {
  let grids = board.querySelectorAll('div');
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });
  });
}

function fillRandom() {
  let grids = board.querySelectorAll('div');
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
}

function eraser() {
  let grids = board.querySelectorAll('div');
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'white';
    });
  });
}

createGridButton.addEventListener('click', createGrid);
resetButton.addEventListener('click', reset);

blackButton.addEventListener('click', fillBlack);
randomButton.addEventListener('click', fillRandom);
eraserButton.addEventListener('click', eraser);