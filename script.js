console.log("Initialize");
// Create 16x16 grid squares inside div
// div with id="container" exists
const container = document.querySelector("#container");
// const divSquares = document.querySelectorAll(".squares");
// const rows = document.querySelectorAll(".rows");
// const gridSquares = document.querySelectorAll("#container>div:nth-child");

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
      console.log(`gridAmount is: ${gridAmount}`);
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
