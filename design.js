
const pixelCanvas = document.querySelector('#pixelCanvas');
const submit = document.querySelector('button');
const color = document.querySelector('#colorPicker');

//sets up the grid
function makeGrid() {

//removes previous canvas
  while (pixelCanvas.firstElementChild){
    const rm = pixelCanvas.firstElementChild
    pixelCanvas.removeChild(rm);
  }

  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;

//sets up new canvas
  for (let h = 1; h <= height; h++){
    const row = document.createElement("tr");
    pixelCanvas.appendChild(row);
    for (let w = 1; w <= width; w++){
      const column = document.createElement("td");
      row.appendChild(column);
    }
  }

}

//colors pixel
function coloring(event){
  const color = document.querySelector('#colorPicker').value;
  event.target.style.backgroundColor = color;
}

submit.addEventListener('click', makeGrid)
pixelCanvas.addEventListener('click', coloring)
