// wait for the DOM to finish loading
$(document).ready(function() {

  console.log("ready in ready function");

  $('#a1').on('click', imageAppear);
  $('#a2').on('click', imageAppear);
  $('#a3').on('click', imageAppear);
  $('#b1').on('click', imageAppear);
  $('#b2').on('click', imageAppear);
  $('#b3').on('click', imageAppear);
  $('#c1').on('click', imageAppear);
  $('#c2').on('click', imageAppear);
  $('#c3').on('click', imageAppear);

});

var isPlayerOnesTurn = true;

var boardGame = {};

// whenever a square is clicked, check to see if the square is in boardGame
// if the square is in boardGame, break
// if the square is not in boardGame, display image of current turn
// pop square into boardGame object
// check to see if there is a winner or no more empty spaces
// if game continues, change turn



// updating square image to icon

  function imageAppear(event){
    var id = event.currentTarget;
    // if player ones turn input this image
    $(id).css("background-image", "url('images/moustache-icon.png')");
    // else input a different image
    $(id).css("background-repeat", "no-repeat");
    $(id).css("background-position", "center");
    console.log($(id).css("background-image"));
    console.log(event.currentTarget);
  }


console.log("end of text");
