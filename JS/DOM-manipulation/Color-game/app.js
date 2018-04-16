const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)'
];

const squares = document.querySelectorAll('.square');
const pickedColor = colors[3];
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener('click', function() {
    //grab color of clicked square and
    const clickedColor = this.style.backgroundColor;
    //compared it to picked color
    if(clickedColor === pickedColor){
      messageDisplay.textContent = 'Correct!';
    } else {
      this.style.backgroundColor = '#c0c5ff';
      messageDisplay.textContent = 'Try again';
    }
  });
}
