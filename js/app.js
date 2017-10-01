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
var haveAWinner = false;
var boardGame = {};

// check to see if there is a winner or no more empty spaces

// function to update square image to icon
  function imageAppear(event){
    var id = event.currentTarget; // identifying DOM object that was clicked
    var square = event.currentTarget.id; // storing specific ID that was clicked
    // checking to see if the square that was clicked is listed in object
    if (boardGame[square] != undefined) {
      return;
    } else {
      // if / else to input correct image and update whose turn it is
      if ((isPlayerOnesTurn == true) && (haveAWinner == false)) {
        boardGame[square] = "player1";
        $(id).css("background-image", "url('images/coffee.png')");
        isPlayerOnesTurn = false;
      } else if ((isPlayerOnesTurn == false) && (haveAWinner == false)) {
        boardGame[square] = "player2";
        $(id).css("background-image", "url('images/beer.jpg')");
        isPlayerOnesTurn = true;
      };
      // center the image in the square and no tiling
      $(id).css("background-repeat", "no-repeat");
      $(id).css("background-position", "center");
    }
    if ((boardGame["a1"] == boardGame["a2"]) && (boardGame["a2"] == boardGame["a3"])) {
      alert("We have a winner");
      haveAWinner = true;
      return;
    };
    // console.log(boardGame["a1"]);
    // console.log(boardGame["a2"]);
    // console.log(boardGame["a3"]);
  }


console.log("end of text");
