document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getExternal);

function getText() {
  fetch('text.txt')
    .then((response) => {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
      document.querySelector('#output').innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    })
}

function getJson() {
  fetch('post.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // document.querySelector('#output').innerHTML = data;
      let output = '';

      data.forEach((post) => {
        output += `
        <ul>
          <li>${post.title}</li>
          <li>${post.body}</li>
        </ul>
        `;
      })

      document.querySelector('#output').innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    })
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = '';
      data.forEach((user) => {
        output += `
        <ul>
          <li>${user.login}</li>
        </ul>
        `
      })
      document.querySelector('#output').innerHTML = output;
    })
}