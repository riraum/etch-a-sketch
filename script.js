console.log("안녕!");
// select the container div in the html
const container = document.querySelector("#container");
// function to create grid
function createGrid(size) {
  // row loop size times
  for (let i = 0; i < size; i++) {
    // define row and create row divs
    let row = document.createElement("div");
    // adding the row class
    row.classList.add("row");
    // cell loop size times
    for (let y = 0; y < size; y++) {
      // define cell and create cell divs
      let cell = document.createElement("div");
      // adding the cell class
      cell.classList.add("cell");
      // append the cell divs to the row divs
      row.appendChild(cell);
    }
    // append the rows to the container/main div
    container.appendChild(row);
  }
}
// call function with default size of 16
createGrid(16);
// function to create user defined grid
function requestGridSize() {
  // define user size and prompt user for size
  let userSize = prompt("Enter grid size <100");
  // remove old grid from container
  container.replaceChildren();
  // call function with user size
  createGrid(userSize);
}
