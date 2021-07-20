(function(){

  // Regular Function with argument
  function hello(name) {
    console.log('Hello ' + name);
  }
  hello('Rane');

  // Arrow Function with argument
  var hello2 = (name) => {
    console.log('Hello ' + name);
  }
  hello2('Alex');

// -----------------------------------------------------------------------------

  // Example use of EventListener and Arrow Function together

  var submitBtn = document.querySelector('#submitBtn');
  var userName = document.querySelector('#nameInput');

  // Checks if input is empty and triggers hello alert
  submitBtn.addEventListener('click', () => {
    if (userName.value == null || userName.value == '') {
      alert('pls enter a value')
    } else {
      submitClicked(userName.value);
    }
  });

  var submitClicked = (name) => {
    alert('Hello ' + name);
  };

// -----------------------------------------------------------------------------

  // A Basic Promise

  // Promise declared by a regular function that passes the arguments:
  // Resolve, Reject
  var myPromise = new Promise(function(resolve, reject){
    resolve('Our first promise was successful');
  })
  // activating a callback, grabbing the data
  myPromise.then((data) => console.log(data));


  // Basic Promise using Catch and Then

  var myPromise2 = new Promise(function(resolve, reject){
    var x = 0;
    if (x > 1){
      resolve('Our promise was successful');
    } else {
      reject('Error: the variable x is equal to ' + x);
    }
  });

  // you can stack multiple callbacks
  myPromise2.then((data) => console.log(data))
  .then((data) => console.log('Super Successful!'))
  .then((data) => console.log('Very very Successful'))
  .catch((data) => console.log(data));

// -----------------------------------------------------------------------------

  // Applying the Promise
  var firstNum = document.querySelector('#firstNum');
  var secondNum = document.querySelector('#secondNum');
  var calculateBtn = document.querySelector('#calculate')

  calculateBtn.addEventListener('click', () => {
    var calculate = new Promise(function(resolve, reject){
      var a = firstNum.value;
      var b = secondNum.value;
      if (a === 0 || b === 0){
        reject('Please Enter Values');
      } else {
        // console.log(a / b);
      }
    });
  });

}());
