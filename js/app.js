// wait for the DOM to finish loading
$(document).ready(function() {

  console.log("ready in ready function");

  var greeting = $('#a1');
  greeting.on('click', popUpYay);

});

console.log("between functions");

  function popUpYay(event){
    alert('Yay!');
    $('#a1').css("background-color", "orange");

  }

console.log("end of text");
