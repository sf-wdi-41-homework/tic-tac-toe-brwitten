// wait for the DOM to finish loading
$(document).ready(function() {

  console.log("ready in ready function");

  var greeting = $('#a1');
  greeting.on('mouseover', popUpYay);

});

console.log("between functions");

  function popUpYay(event){
    alert('Yay!');

  }

console.log("end of text");
