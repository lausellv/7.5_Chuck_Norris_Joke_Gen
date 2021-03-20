document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){
  const number = document.querySelector('#number').value;


  const xhr = new XMLHttpRequest();

  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true); // we set it to true to make sure it's asynchronous

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
          document.querySelector('.jokes').innerHTML = output;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
    }
  }

  xhr.send();

  event.preventDefault();
}