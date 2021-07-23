
(function() {

  var jsonDir = "./js/MOCK_DATA.json";
  fetch(jsonDir)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      $("#result").append(
        "<div class='col-3'>" +
          "<div class='card' style='width: 20rem;'>" +
            "<div class='card-body'>" +
            "<img class='avatar' src=" + data[i].avatar + "</img>" +
            "<h4 class='name-title'>" + data[i].first_name + "</h4>" +
            "<h6 class='name-title'>" + data[i].last_name + "</h6>" +
            "<p class='card-text'>" + data[i].gender + "</p>" +
            "<p class='card-text'>" + data[i].email + "</p>" +
          "</div>" +
        "</div>"
    );
    }
  })
  .catch(data => {
    console.log(error);
  })

}());




// Class tutorial on json - linked to local-json.html

// (function(){
//   var jsonDir = "./js/data.json";
//
//   var dataText = document.querySelectorAll('.data');
//   var nameTitle = document.querySelectorAll('.name-title');
//   var carText = document.querySelectorAll('.car-text');
//   var ageText = document.querySelectorAll('.age-text');
//
//   var dataContainer = document.querySelectorAll('.data-container')
//
//
//   fetch(jsonDir)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // Displaying all data on DOM
//     for (var i = 0; i < dataText.length; i++) {
//       dataText[i].textContent = Object.values(data[i]);
//       console.log(data[i]);
//     }
//     // Displaying information on the cards
//     for (var i = 0; i < data.length; i++) {
//       nameTitle[i].textContent = data[i].name
//       carText[i].textContent = data[i].car
//       ageText[i].textContent = data[i].age
//       // var newDiv = document.createElement("div")
//       // dataContainer.appendChild(newDiv)
//       // console.dir(dataContainer);
//     }
//     for (let i = 0; i < data.length; i++) {
//       $("#result").append(
//         "<div class='col-3'>" +
//           "<div class='card' style='width: 18rem;'>" +
//             "<div class='card-body'>" +
//             "<h5 class='name-title'>" + data[i].name + "</h5>" +
//             "<p class='age-text'>Age: " + data[i].age + "</p>" +
//             "<p class='car-text'>Car: " + data[i].car + "</p>" +
//           "</div>" +
//         "</div>"
//     );
//     }
//
//   })
//   .catch(data => {
//     console.log('error');
//   });
// }());
