// const sayHello = function() {
//   console.log('Hello');
// }


// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not use braces
// const sayHello = () => console.log('Hello');

// const sayHello = () => 'Hello';

// object literals must be between parentheses!
// const sayHello = () => ({msg: 'Hello'});

// const sayHello = (name) => console.log(`Hello ${name}`);
// for single params no parentheses is needed
// const sayHello = name => console.log(`Hello ${name}`);
// multiple params need ()
// const sayHello = (name, lastName) => console.log(`Hello ${name} ${lastName}`);

// sayHello('Brad', 'Neves');

// const users = ['Gabs', 'Stella', 'Vhore'];

// const nameLenghts = users.map((name) => {
//   return name.length;
// // })

// const nameLenghts = users.map(name => name.length);

// console.log(nameLenghts);'

document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJson);
document.querySelector('#button3').addEventListener('click', getExternal);

function getText() {
  fetch('text.txt')
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.querySelector('#output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson() {
  fetch('post.json')
    .then(response => response.json())
    .then(data => {
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
    .catch(err => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
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
    .catch(err => console.log(err));
}