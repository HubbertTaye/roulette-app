//declaring a variable for the roulette choice
let userMoney;
  let results = document.getElementById('result');
function startGame(){
  let userChoice = document.querySelector('.color:checked').value;
  let wheelChoice = wheelSpin();
  compareChoices(userChoice, wheelChoice)
}
//what happens when the box is clicked
function wheelSpin(){
  const numbSelector = Math.random();

  if(numbSelector > .5){
    return "black";
  }else if(numbSelector < .5){
    return "red";
  }
} //pickBox closes

//comparison function
function compareChoices(userChoice, wheelChoice){

  let userMoney;
  if(userChoice === wheelChoice){
    result.textContent = `You won ${userChoice}`
  }else{
    ``
  }
}

document.querySelector('#runUpBitch').addEventListener('click', startGame);
