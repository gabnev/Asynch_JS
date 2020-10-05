const posts = [
  {
    title: "Post one",
    body: "This is post one"
  },
  {
    title: "Post two",
    body: "This is post two"
  }
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();        
      } else {
        reject('Error! Something went wrong.')
      }
    }, 2000);
  });
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

createPost({title: 'Post three', body: 'This is post three'})
.then(getPosts)
.catch((err) => {
  console.log(err);
});