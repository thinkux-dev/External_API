document.querySelector('.get-jokes').addEventListener
('click', getJokes);

function getJokes(e){
  const number = document.querySelector
  ('input[type="number"]').value;

  const xhr = new XMLHttpRequest();
  const apiKey = 'BJ8AGjxTaKM3shgD89+GMA==A31xIoIAGkxJQ4QF'; // Replace 'YOUR_API_KEY' with your actual API key

  xhr.open('GET', `https://api.api-ninjas.com/v1/jokes?limit=${number}`, 
  true);

  // Set the API key in the request header
  xhr.setRequestHeader('X-Api-Key', apiKey);

  xhr.onload = function(){
    let output = '';
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response);
      
      // let output = '';
      response.forEach(function(joke){
        output += `<li>${joke.joke}</li>`
      });

      // if(response.type === 'success'){
      //   response.value.forEach(function(joke){
      //     output += `<li>${joke.joke}</li>`
      //   });
      // } else {
      //   output += '<li>Something went wrong</li>'
      // }

      // document.querySelector('.jokes').innerHTML = output;
      
    } else {
      output += '<li>Something went wrong</li>'
    }
    document.querySelector('.jokes').innerHTML = output;
  }

  xhr.send()

  e.preventDefault();
}