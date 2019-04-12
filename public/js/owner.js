// Owner should be able to input value into form to add total funds/bet
//Owner must also be able to view how much $ profit (losses) and how much $ loss (wins)
//if the current value does not equal the current value then update into the dom

 
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
