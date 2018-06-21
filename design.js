
const pixelCanvas = document.querySelector('#pixelCanvas');
const sizePicker = document.querySelector('#sizePicker');
const color = document.querySelector('#colorPicker');


//sets up the grid
function makeGrid(event) {
 event.preventDefault();
//removes previous canvas
  while (pixelCanvas.firstElementChild){
    const rm = pixelCanvas.firstElementChild
    pixelCanvas.removeChild(rm);
  }

  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;

//sets up new canvas
 const table = document.getElementById('pixelCanvas');
  for (let h = 0; h < height; h++){
     const row = table.insertRow(h);
    pixelCanvas.appendChild(row);
    for (let w = 0; w < width; w++){
      row.insertCell(w)
    }
  }
  const tbody = document.querySelector('tbody');
  tbody.remove();
}

//colors pixel
function coloring(event){
  const color = document.querySelector('#colorPicker').value;
  event.target.style.backgroundColor = color;
}

sizePicker.addEventListener('submit', makeGrid);
pixelCanvas.addEventListener('click', coloring);
