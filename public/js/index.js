//declaring a variable for the roulette choice
let houseChoice;

function startGame(){
  let userChoice = document.querySelector('.color:checked').value;
  console.log(userChoice);
}
//what happens when the box is clicked
function pickBox(){
  const numbSelector = Math.random();

  if(numbSelector > .5){
    houseChoice = "black";
  }else if(numbSelector < .5){
    houseChoice = "red";
  }


} //pickBox closes

document.querySelector('#runUpBitch').addEventListener('click', startGame);
