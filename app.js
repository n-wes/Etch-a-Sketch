const row_field = document.getElementById('row-field');
const make_rows_button = document.getElementById('make-rows');
const clear_button = document.getElementById('clear-button');
const canvas_div = document.getElementById('canvas');

//First Load Values
row_field.value = '70';
createRows(Number(row_field.value));

make_rows_button.addEventListener('click', function() {
  try {
      let row_div = document.getElementsByClassName('row');
      for (let i = row_div.length-1; i >= 0; i--) {
      canvas_div.removeChild(row_div[i]);
      }
  } catch (e) {}
  createRows(row_field.value);
});

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
  //Add color on hover
  setInterval(changeBackground, 0);
  function changeBackground() {
    const hovered_divs = document.querySelectorAll('.hovered');
    hovered_divs.forEach(function(hovered) {
      hovered.style.background = "#000000";
    });
  }
}

clear_button.addEventListener('click', clearCanvas);

function clearCanvas() {
  const square_divs = document.querySelectorAll('.square');
  square_divs.forEach(function(square) {
    square.classList.remove('hovered');
    square.style.background = 'white';
  })
}
