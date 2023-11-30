const dimensionInput = document.querySelector('#dimension');
const createGridButton = document.querySelector('.create-grid-button');
const gridContainer = document.querySelector('.grid-container');
const gridCreationInfo = document.querySelector('.grid-creation-info');

function createGrid() {
  let dimension = parseInt(dimensionInput.value)

  if (dimension < 2 || dimension > 100) {
    gridCreationInfo.textContent = '2 <= grid <= 100';
    console.log(typeof dimension);
  } else {
    gridContainer.style.setProperty('--dimension', dimension);

    for (let i = 0; i < dimension ** 2; i++) {
      let grid = document.createElement('div');
      grid.style.backgroundColor = 'skyblue';
      gridContainer.appendChild(grid);
    }

    gridCreationInfo.textContent = 'Grid created!';
  }
}

createGridButton.addEventListener('click', createGrid);