(function() {
  console.log('nice');
  var images = ['url("img/img1.jpg")', 'url("img/img2.jpg")','url("img/img3.jpg")','url("img/img4.jpg")'];
  var leftArrow = document.querySelector('#leftArrow');
  var rightArrow = document.querySelector('#rightArrow');

  var imgContainer = document.querySelector('.img-container');
  var pageCounter = 0;
  imgContainer.style.backgroundImage = images[pageCounter]


  leftArrow.addEventListener('click', () => {
    if (pageCounter > 0){
      pageCounter = pageCounter - 1;
      imgContainer.style.backgroundImage = images[pageCounter];
    }
  });

  rightArrow.addEventListener('click', () => {
    if (pageCounter < 3){
      pageCounter = pageCounter + 1;
      imgContainer.style.backgroundImage = images[pageCounter];
    }
  });


}());
