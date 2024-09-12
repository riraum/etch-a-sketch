console.log("Initialize");
// Create 16x16 grid squares inside div
// div with id="container" exists
const divSelect = document.querySelector("#container");
for (let i = 0; i < 32; i++) {
  let gridSquares = document.createElement("div");
  divSelect.appendChild(gridSquares);
  // gridSquares.style.width = "20px";
  // gridSquares.style.height = "20px";
  gridSquares.style.background = "red";
}
