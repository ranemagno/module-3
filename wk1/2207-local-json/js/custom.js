(function(){

  // Linking json file
  var jsonDir = "./js/data.json";


  // Fetch Function
  fetch(jsonDir)
  .then(response => {
    // .json() a function to recognize that response is a json file
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(data => {
    console.log('error');
  });
}());
