//declaring a variable for the roulette choice
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

  let userMoney=50;
  if(userChoice === wheelChoice){
    result.textContent = `You won ${userMoney}`
    fetch('decrease', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'userMoney': userMoney
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      //window.location.reload(true)
    })
  }else{
    result.textContent =  `You lost ${userMoney}`
    fetch('increase', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'userMoney': userMoney
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      //window.location.reload(true)
    })
  }
}

document.querySelector('#startGame').addEventListener('click', startGame);
