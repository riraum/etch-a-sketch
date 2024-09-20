console.log("안녕");

const container = document.querySelector("#container");

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let y = 0; y < size; y++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}
createGrid(16);
