const p1Button = document.querySelector('#p1');
const p2Button = document.getElementById('p2');
const resetButton = document.getElementById('reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const numInput = document.querySelector('input');
const winningScoreDisplay = document.querySelector('p span');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click', function(){
  if(!gameOver){
    p1Score++;
    console.log(p1Score, winningScore);
    if(p1Score === winningScore){
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener('click', reset);

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
  gameOver = false;
}

numInput.addEventListener('change', function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = parseInt(this.value);
  reset();
});
