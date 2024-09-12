console.log("Initialize");
// Create 16x16 grid squares inside div
// div with id="container" exists
const divSelect = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
  let gridSquares = document.createElement("div-squares");
  divSelect.appendChild(gridSquares);
  // gridSquares.style.width = "20px";
  // gridSquares.style.height = "20px";
  // gridSquares.style.background = "red";
}
// Add eventlistener for hover
// divSelect.addEventListener("hover", (e) => {
//   console.log("hello");
// });
