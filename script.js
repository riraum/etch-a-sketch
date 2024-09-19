console.log("Initialize");
// Create 16x16 grid squares inside div
// div with id="container" exists
const container = document.querySelector("#container");
// const divSquares = document.querySelectorAll(".squares");
// const rows = document.querySelectorAll(".rows");
// const gridSquares = document.querySelectorAll("#container>div:nth-child");

function createGridSquares(gridAmount) {
  for (let i = 0; i < gridAmount * gridAmount; i++) {
    let gridSquares = document.createElement("div");
    gridSquares.classList.add("squares");

    if (i % gridAmount == 0) {
      // gridSquares.classList.add("break");
      let breakDiv = document.createElement("div");
      breakDiv.className = "break";
      // container.insertBefore(breakDiv, gridSquares[i +1]);
      container.appendChild(breakDiv);
    }

    container.appendChild(gridSquares);
    console.log(`gridAmount is: ${gridAmount}`);
  }
}

createGridSquares(16);

function requestGridSize() {
  let newGridSize = prompt("Enter grid size <=100");
  container.replaceChildren();
  createGridSquares(newGridSize);
  console.log(`newGridSize is: ${newGridSize}`);
}
