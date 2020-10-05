document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // Open - specify type, file and name of request
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // optional - used for spinners / loaders

  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
    console.log('put a spinner or loader on this block to get some effects while waiting!');
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // older way to do it - checking readyStates

  // xhr.onreadystatechange = function() {
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function() {
    console.log('error!');
  }

  xhr.send();

  // Ready states values
  // 0: Request not initialized
  // 1: server connection estabilished
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP statuses
  // 200: 'OK'
  // 404: 'Not found'
}