// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const pixelCanvas = document.querySelector('#pixelCanvas');
const submit = document.querySelector('button');

// selects the submit button
// const inputs = document.getElementsByTagName('input');
//   for (let i = 0; i < inputs.length; i++){
//     if(inputs[i].type.toLowerCase() == 'submit'){
//     submitInput = inputs[i];
//     }
//   }

//sets up the grid
function makeGrid() {
  
  while (pixelCanvas.firstElementChild){
    const rm = pixelCanvas.firstElementChild
    pixelCanvas.removeChild(rm);
  }

  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;

  for (let h = 1; h <= height; h++){
    const row = document.createElement("tr");
    pixelCanvas.appendChild(row);
    for (let w = 1; w <= width; w++){
      const column = document.createElement("td");
      row.appendChild(column);
    }
  }

}

submit.addEventListener('click', makeGrid)
