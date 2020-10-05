const posts = [
  {
    title: 'post one',
    body: 'this is post one'
  },
  {
    title: 'post two',
    body: 'this is post two'
  }
];
// Synchronous
// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000)
// }

// createPost({title: 'post three', body: 'this is post three'});

// getPosts();


// asynchronous
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

createPost({title: 'post three', body: 'this is post three'}, getPosts);
