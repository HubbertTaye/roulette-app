//on click you can place any amount of chips on a number square
//each chip is worth a dollar
//to place a bet we spin a wheel of 38 options
// if the wheel lands on a number that you have picked you win the BET
//for inside bets of getting the number correct, each chip placed on the winning number has a multiplier for money earned of 36
  //store the money earned in a variable to send back to the API
//for outside bets of even, odd, red or black, the chips increase the total earned by a multiple of 2
  //store the money earned in a variable to send back to the API
//store the wins and losses into variables to send back to the API

let clicks = 0,
wins = 0,
losses = 0,
total = 1000;
var boxes = document.querySelectorAll('.box');
Array.from(boxes).forEach(function(box) {
      box.addEventListener('click', function(){
clicks+=1
wheelDisplay()
checkAndUpdate()
})
});

let wheel = document.querySelector('.results')
//function wheelDisplay
Math.random (num 0 through 36) display as wheel.textContent
Math.random for .red and .black class => wheel.classList.add()
Math.random for .odd and .even class

function checkAndUpdate(){


if(this.classList.contains('.red') === wheel.classList.contains('.red')||this.classList.contains('.black') === wheel.classList.contains('.black')||this.classList.contains('.even') === wheel.classList.contains('.even')||this.classList.contains('.odd') === wheel.classList.contains('.odd')){
total = clicks *= 2;
}
if(){

}

}
