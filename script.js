console.log("Initialize");
// Create 16x16 grid squares inside div
// div with id="container" exists
const container = document.querySelector("#container");
const divSquares = document.querySelectorAll("div-squares");
// const gridSquares = document.createElement("div-squares");

function createGrid(gridAmount) {
  for (i = 0; i < gridAmount; i++) {
    let gridSquares = document.createElement("div-squares");
    container.appendChild(gridSquares);
  }
}
createGrid(256);

function createUserGrid(gridAmount) {
  // container.removeChild(container.divSquares);
  container.replaceChildren();
  for (i = 0; i < gridAmount; i++) {
    let gridSquares = document.createElement("div-squares");
    container.appendChild(gridSquares);
    console.log(`gridAmount is: ${gridAmount}`);
  }
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
