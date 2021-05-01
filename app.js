document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){
  console.log('get jokes')
  const number = document.querySelector('#number').value; 
  console.log(number); // querySelector('input[type="number"])


  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true); // we set it to true to make sure it's asynchronous

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log (this.responseText);
      console.log (response);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(num){
          
          output += `<li>${num.joke} </li>`;
          document.querySelector('.jokes').innerHTML = output.toUpperCase();
        });
      } else {
        
        output += '<li style="color:red;">Something went wrong!!!</li>';
        document.querySelector('.jokes').innerHTML = output.toUpperCase();

      }
    }
  }

  xhr.send();

  event.preventDefault();
}