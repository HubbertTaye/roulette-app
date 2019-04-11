//on click you can place any amount of chips on a number square
//each chip is worth a dollar
//to place a bet we spin a wheel of 38 options
// if the wheel lands on a number that you have picked you win the BET
//for inside bets of getting the number correct, each chip placed on the winning number has a multiplier for money earned of 36
  //store the money earned in a variable to send back to the API
//for outside bets of even, odd, red or black, the chips increase the total earned by a multiple of 2
  //store the money earned in a variable to send back to the API
//store the wins and losses into variables to send back to the API

let chips = 0,
wins = 0,
losses = 0,
gains = 0,
loss = 0;
var boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function(){
chips+=1
})
});
document.querySelector('.start').addEventListener('click', startGame)

function startGame(box){
  wheelSpin()
  checkAndUpdate(box)
}

let wheel = document.querySelector('.results')
function wheelSpin(){
//  Math.random (num 0 through 36) display as wheel.textContent
//Math.random for .red and .black class => wheel.classList.add()
//Math.random for .odd and .even class
  let num = Math.random()
  if(num<=.5){
    wheel.classList.add('red')
    wheel.classList.add('even')
  }else{
    wheel.classList.add('black')
    wheel.classList.add('odd')
  }
  if(wheel.classList.contains('odd')){
  //  Math.random only odd numbers
  }else if(wheel.classList.contains('even')){
  //  Math.random
  }

} //closes wheelSpin function

function checkAndUpdate(box){

if(box.classList.contains('.red') === wheel.classList.contains('.red')||box.classList.contains('.black') === wheel.classList.contains('.black')||box.classList.contains('.even') === wheel.classList.contains('.even')||box.classList.contains('.odd') === wheel.classList.contains('.odd')){
 gains = chips * 2;
 console.log(gains)
 }

} //closes checkAndUpdate function
