// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const pixelCanvas = document.querySelector('#pixelCanvas');
let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');

function makeGrid() {

  for (let h = 1; h <= height; h++){
    const row = document.createElement("tr");
    pixelCanvas.appendChild(row);
    for (let w = 1; w <= width; w++){
      const column = document.createElement("td");
      row.appendChild(column);
    }
  }

}
