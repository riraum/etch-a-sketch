console.log("Initialize");
// Create 16x16 grid squares inside div
// div with id="container" exists
const container = document.querySelector("#container");
const divSquares = document.querySelectorAll(".squares");
// const breakDiv = document.createElement(".break");
// const gridSquares = document.querySelectorAll("#container>div:nth-child");

function createGridSquares(gridAmount) {
  for (i = 1; i < gridAmount; i++) {
    let gridSquares = document.createElement("div");
    gridSquares.classList.add("squares");
    container.appendChild(gridSquares);
    console.log(`gridAmount is: ${gridAmount}`);
  }
}

function createGrid(gridAmount) {
  createGridSquares(gridAmount);
  let breakDiv = document.createElement("div");
  breakDiv.className = "break";
  container.appendChild(breakDiv);
}
createGrid(273);

function createUserGrid(gridAmount) {
  // container.removeChild(container.divSquares);
  container.replaceChildren();
  createGridSquares(gridAmount);
}
// Add eventlistener for hover
// divSelect.addEventListener("hover", (e) => {
//   console.log("hello");
// });
function requestGridSize() {
  let newGridSize = prompt("Enter grid size <=100");
  createUserGrid(newGridSize * newGridSize);
  console.log(`newGridSize is: ${newGridSize}`);
}
