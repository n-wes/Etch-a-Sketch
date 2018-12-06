const body_div = document.body;
const clear_button = document.getElementById('clear-button');
const canvas_div = document.getElementById('canvas');



createRows(120);


// create square grid layout of divs
function createRows(rows) {
  //creates an amount of row_divs based on value of rows
  for (let i = 0; i < rows; i++) {
    let row_div = document.createElement('div');
    row_div.className = 'row';
    //creates an amount of square_divs based on value of rows
    for (let j = 1; j <= rows*0.7; j++) {
      let square_div = document.createElement('div');
      //set dimensions of square_div based on canvas size and number of rows
      square_div.className = 'square';
      square_div.style.width = square_div.style.height =
        `${canvas_div.clientWidth/rows}px`;
      square_div.addEventListener('mouseover', toggleShiftColor)
      row_div.appendChild(square_div);
    }
    canvas_div.appendChild(row_div);
  }
}

function toggleShiftColor() {
  this.classList.add('hovered');
}

clear_button.addEventListener('click', clearCanvas);

function clearCanvas() {
  const square_divs = document.querySelectorAll('.square');
  /*
  THIS DOES THE SAME THING AS BELLOW
  for (let i = 0; i < square_divs.length; i++) {
    square_divs[i].classList.remove('hovered');
    //console.log(square_divs[i]);
  }*/
  square_divs.forEach(function(square) {
    square.classList.remove('hovered');
  })
}
