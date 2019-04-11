
function startGame(){
  let userChoice = document.querySelector('.color').value
  console.log(userChoice)
}
//what happens when the box is clicked
function pickBox(){
  const numbSelector = Math.random();

  if(numbSelector > 1){
    clickIt = this.classList.add("black")
    console.log(numbSelector);
  }else if(numbSelector < 1){
    clickIt = this.classList.add("red")
  }

  // let dealer = numbs[numbSelector]

}

document.querySelector('button').addEventListener('click', startGame)
