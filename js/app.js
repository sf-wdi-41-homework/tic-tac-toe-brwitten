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

var boardGame = [];

// whenever a square is clicked, check to see if the square is in boardGame
// if the square is in boardGame, break
// if the square is not in boardGame, display image of current turn
// pop square into boardGame object
// check to see if there is a winner or no more empty spaces



// function to update square image to icon
  function imageAppear(event){
    // using the event listener to the id of the sqaure that was selected
    var id = event.currentTarget;
    // if / else to input correct image and update whose turn it is
    if (isPlayerOnesTurn == true) {
      $(id).css("background-image", "url('images/coffee.png')");
      isPlayerOnesTurn = false;
    } else {
      $(id).css("background-image", "url('images/beer.jpg')");
      isPlayerOnesTurn = true;
    };
    // center the image in the square and no tiling
    $(id).css("background-repeat", "no-repeat");
    $(id).css("background-position", "center");
    boardGame.push(id);  // adding square id to the board game array
    console.log(isPlayerOnesTurn);
  }


console.log("end of text");
