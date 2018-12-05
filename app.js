const body_div = document.body;
const canvas_div = document.getElementById('canvas');

createRows(20);
console.log(canvas_div.width);
// create square grid layout of divs
function createRows(rows) {
  //creates an amount of row_divs based on value of rows
  for (let i = 0; i < rows; i++) {
    let row_div = document.createElement('div');
    row_div.className = 'row';
    //creates an amount of square_divs based on value of rows
    for (let j = 1; j <= rows*0.7; j++) {
      let square_div = document.createElement('div');
      square_div.className = 'square';
      //square_div.innerText = (i*rows) + j;
      //square.width = canvas_div
      row_div.appendChild(square_div);
    }
    canvas_div.appendChild(row_div);
  }
}
