//add event listener on update money btn
//take the value from the input and store in a variable
//send the variable to routes via fetch put method
  //send variable via JSON.stringify

Array.from(stats).forEach(function(el) {
      el.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        fetch('stats', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'monies': monies,
            'wins': wins,
            'losses':losses
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
