//
// //on click you can place any amount of chips on a number square
// //each chip is worth a dollar
// //to place a bet we spin a wheel of 38 options
// // if the wheel lands on a number that you have picked you win the BET
// //for inside bets of getting the number correct, each chip placed on the winning number has a multiplier for money earned of 36
// //for outside bets of even, odd, red or black, the chips increase the total earned by a multiple of 2
//
//
// let clicks = 0,
// wins = 0,
// losses = 0,
// total = 1000;
// var boxes = document.querySelectorAll('.box');
// Array.from(boxes).forEach(function(box) {
//       box.addEventListener('click', function(){
// clicks+=1
// wheelSpin()
// checkAndUpdate()
//   }
// )};
//
// let wheel = document.querySelector('.results')
// function wheelSpin(){
// //  Math.random (num 0 through 36) display as wheel.textContent
// //Math.random for .red and .black class => wheel.classList.add()
// //Math.random for .odd and .even class
//   let num = Math.random()
//   if(num<=.5){
//     wheel.classList.add('red')
//     wheel.classList.add('even')
//   }else{
//     wheel.classList.add('black')
//     wheel.classList.add('odd')
//
//   }
//
//
// }
//
//
// function checkAndUpdate(){
//
//
// if(this.classList.contains('red') === wheel.classList.contains('red')||this.classList.contains('black') === wheel.classList.contains('black')||this.classList.contains('even') === wheel.classList.contains('even')||this.classList.contains('odd') === wheel.classList.contains('odd')){
// total = clicks *= 2;
// wins += 1;
// }
// if(this.textContent === wheel.textContent){
// total = clicks *= 36;
// wins += 1;
// }
//
// }

//if 1 2 5 color equals BLACK
//else if 6 7 or 8 color RED
//else green


document.querySelector('button').addEventListener('click', update);
let result = 300,

function update(){



}
