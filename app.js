const body_div = document.body;
const canvas = document.getElementById('#canvas')

createRows(10);

// create square grid layout of divs
function createRows(rows) {
  //creates an amount of row_divs based on value of rows
  for (let i = 0; i < rows; i++) {
    let row_div = document.createElement('div');
    row_div.className = 'row';
    //creates an amount of square_divs based on value of rows
    for (let j = 1; j <= rows; j++) {
      let square_div = document.createElement('div');
      square_div.className = 'square';
      square_div.innerText = (i*rows) + j;
      row_div.appendChild(square_div);
    }
    body_div.appendChild(row_div);
  }
}
