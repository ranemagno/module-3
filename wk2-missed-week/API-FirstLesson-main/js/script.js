console.log('script');

//Javascript object

// var student = [
//   {
//     id : 101,
//     name : 'David'
//   },
//   {
//     id : 102,
//     name : 'Daniel'
//   }
//
// ];
// //display objects
// var i;
// for (i=0; i<student.length; i++){
//   console.log(student[i].id, student[i].name);
// }

//JSON
// var student =[
//   {
//     "id":101,
//     "name": "Smith"
//   },
//   {
//     "id":102,
//     "name": "Joy"
//   }
//
// ];
//display objects
// var i;
// for (i=0; i<student.length; i++){
//   console.log(student[i].id, student[i].name);
//   document.getElementById('objects').innerHTML +=
//   //'<p  class="text-light"> '+ student[i].id + '   '+ student[i].name +'</p>'
//   '<div class="col-12 col-lg-6 col-xl-6"> ' +
//     '<div class="card mt-3 ml-5" style="width: 18rem;">' +
//       '<div class="card-body">'+
//         '<h5 class="card-title">'+ student[i].name +'</h5>'+
//
//         '<p class="card-text"> '+ student[i].id+'</p>'+
//
//       '</div>'+
//     '</div>'+
//   '</div>';
// }

// var i;
// var data = JSON.parse(myData);
// console.log(data);
// for (i=0; i<student.length; i++){
//   console.log(student[i].id, student[i].name);
//   document.getElementById('objects').innerHTML +=
//   //'<p  class="text-light"> '+ student[i].id + '   '+ student[i].name +'</p>'
//   '<div class="col-12 col-lg-6 col-xl-6"> ' +
//     '<div class="card mt-3 ml-5" style="width: 18rem;">' +
//       '<div class="card-body">'+
//         '<h5 class="card-title">'+ student[i].name +'</h5>'+
//
//         '<p class="card-text"> '+ student[i].id+'</p>'+
//
//       '</div>'+
//     '</div>'+
//   '</div>';
// }


//jQuery ajax
// xmlhttprequest - does not support CORS
// $('h1').hide();//testing


$.ajax({
  url : 'https://my.api.mockaroo.com/car_details.json?key=YourKey',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0;i<data.length;i++){
       document.getElementById('objects').innerHTML +=
       '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"> ' +
          '<div class="card mt-3 ml-5" style="width: 18rem;">' +
            '<div class="card-body">'+
              '<h5 class="card-title">'+ data[i].carMake +'</h5>'+

             '<p class="card-text"> '+ data[i].id+ '  '+ data[i].carModel + ' ' + data[i].year+'</p>'+

           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  },  //success
  error : function(){
    console.log('error');
  } //error
}); //ajax
