// (function() {
//   console.log('nice');
//   var images = ['url("img/img1.jpg")', 'url("img/img2.jpg")','url("img/img3.jpg")','url("img/img4.jpg")'];
//   var leftArrow = document.querySelector('#leftArrow');
//   var rightArrow = document.querySelector('#rightArrow');
//   var imgPages = document.querySelectorAll('.img');
//   var pageCounter = 0;
//
//   for (var i = 0; i < imgPages.length; i++) {
//     console.log(imgPages[i]);
//     imgPages[i].style.backgroundImage = images[i];
//   }
//
//   var dots = document.querySelectorAll('.dots');
//   dots[0].classList.add('active-dot');
//
//
//   // Function to go to previous image
//   leftArrow.addEventListener('click', () => {
//     if (pageCounter > 0){
//       pageCounter = pageCounter - 1;
//       dots[pageCounter + 1].classList.remove('active-dot');
//       dots[pageCounter].classList.add('active-dot');
//     }
//   });
//
//   // Function to go to next image
//   rightArrow.addEventListener('click', () => {
//     if (pageCounter < 3){
//       pageCounter = pageCounter + 1;
//       dots[pageCounter - 1].classList.remove('active-dot');
//       dots[pageCounter].classList.add('active-dot');
//       imgPages[0].classList.add('prev-img');
//
//       // imgPages[pageCounter].classList.remove('current-img');
//       // if (imgPages[pageCounter].classList.contains('current-img') == false){
//       //   imgPages[pageCounter].classList.add('current-img');
//       // }
//     }
//   });
// }());



// Working Copy ----------------------------------------------------------------
(function() {
  var images = ['url("img/img1.jpg")', 'url("img/img2.jpg")','url("img/img3.jpg")','url("img/img4.jpg")'];
  var imgContainer = document.querySelector('.img-container');
  imgContainer.style.backgroundImage = images[0];

  var leftArrow = document.querySelector('#leftArrow');
  var rightArrow = document.querySelector('#rightArrow');

  var dots = document.querySelectorAll('.dots');
  dots[0].classList.add('active-dot');

  var pageCounter = 0;
  // Function to go to previous image
  leftArrow.addEventListener('click', () => {
    if (pageCounter > 0){
      pageCounter = pageCounter - 1;
      imgContainer.style.backgroundImage = images[pageCounter];
      dots[pageCounter + 1].classList.remove('active-dot');
      dots[pageCounter].classList.add('active-dot');
    }
  });

  // Function to go to next image
  rightArrow.addEventListener('click', () => {
    if (pageCounter < 3){
      pageCounter = pageCounter + 1;
      imgContainer.style.backgroundImage = images[pageCounter];
      dots[pageCounter - 1].classList.remove('active-dot');
      // dots[pageCounter].classList.add('active-dot');
    }
  });
}());
