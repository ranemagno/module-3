(function(){

  // ES8
  // const newsApi_URL = 'https://newsapi.org/v2/everything?q=keyword&apiKey=e02069884cae4d67ad929ef563f3e846';
  //
  // async function getNews() {
  //   const response = await fetch(newsApi_URL);
  //   const data = await response.json();
  //   console.log(data);
  // }
  // getNews();

  var newsAPI = 'https://newsapi.org/v2/everything?q=keyword&apiKey=e02069884cae4d67ad929ef563f3e846';

  fetch(newsAPI)
  .then(response => {

  })
  .then(data => {
    console.log(data);
  })
  .catch(data => {
    console.log('error');
  });

}());
