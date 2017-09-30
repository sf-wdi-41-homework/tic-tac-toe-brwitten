// wait for the DOM to finish loading
$(document).ready(function() {

  console.log("ready in ready function");

  var greeting = $('#a1');
  greeting.on('click', popUpYay);

});

console.log("between functions");

  function popUpYay(event){
    $('#a1').css("background-image", "url('images/moustache-icon.png')");
    $('#a1').css("background-color", "gray");
    $('#a1').css("background-repeat", "no-repeat");
    $('#a1').css("background-position", "center");
    console.log($('#a1').css("background-image"));
  }

// $('myOjbect').css('background-image', 'url(' + imageUrl + ')');

console.log("end of text");
