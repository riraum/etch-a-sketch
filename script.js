console.log("Initialize");

const container = document.querySelector("#container");

function createGridSquares(gridAmount) {
  // row loop
  for (let i = 0; i < gridAmount; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    // cell loop
    for (let j = 0; j < gridAmount; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

createGridSquares(16);

function requestGridSize() {
  let newGridSize = prompt("Enter grid size <=100");
  container.replaceChildren();
  createGridSquares(newGridSize);
  console.log(`newGridSize is: ${newGridSize}`);
}
