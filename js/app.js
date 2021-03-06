// wait for the DOM to finish loading
$(document).ready(function() {

// adding listeners to call the imageApper function for each square
    // nice ...but could do this on the box class as a forEach ...
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

// Beautiful naming ...
var isPlayerOnesTurn = true;
var haveAWinner = false;
var boardGame = {};


// check to see if there is a winner or no more empty spaces

// function to update square image to icon
  function imageAppear(event){
      // clever use of currentTarget though I think id and square are reversed here
    var id = event.currentTarget; // identifying DOM object that was clicked
    var square = event.currentTarget.id; // storing specific ID that was clicked
    // checking to see if the square that was clicked is listed in object
    if (boardGame[square] != undefined) {
        // Do we need the else clause at all?
      return;
    } else {
      // if / else to input correct image, update whose turn it is, and update header
      if ((isPlayerOnesTurn == true) && (haveAWinner == false)) {
        boardGame[square] = "player1";
        $(id).css("background-image", "url('images/coffee.png')");
        $(id).css("background-color", "white");
        $('#activeTurn').html('Craft beer - your turn! <img src="images/beer.png" height="30" width="30">');
        isPlayerOnesTurn = false;
      } else if ((isPlayerOnesTurn == false) && (haveAWinner == false)) {
        boardGame[square] = "player2";
        $(id).css("background-image", "url('images/beer.png')");
        $('#activeTurn').html('Craft coffee - your turn! <img src="images/coffee.png" height="30" width="30">');
        isPlayerOnesTurn = true;
      };
      // center the image in the square and no tiling
      $(id).css("background-repeat", "no-repeat");
      $(id).css("background-position", "center");
      $(id).css("background-size", "100%");
    }
      // winning positions
      // first three are vertical winners
    if (((boardGame["a1"] == boardGame["a2"]) && (boardGame["a2"] == boardGame["a3"]) && boardGame["a1"] != undefined) ||
       ((boardGame["b1"] == boardGame["b2"]) && (boardGame["b2"] == boardGame["b3"]) && boardGame["b1"] != undefined) ||
       ((boardGame["c1"] == boardGame["c2"]) && (boardGame["c2"] == boardGame["c3"]) && boardGame["c1"] != undefined) ||
      // next three are horizontal winners
       ((boardGame["a1"] == boardGame["b1"]) && (boardGame["b1"] == boardGame["c1"]) && boardGame["c1"] != undefined) ||
       ((boardGame["a2"] == boardGame["b2"]) && (boardGame["b2"] == boardGame["c2"]) && boardGame["c2"] != undefined) ||
       ((boardGame["a3"] == boardGame["b3"]) && (boardGame["b3"] == boardGame["c3"]) && boardGame["c3"] != undefined) ||
       // diagnol top to bottom winner
       ((boardGame["a1"] == boardGame["b2"]) && (boardGame["b2"] == boardGame["c3"]) && boardGame["c3"] != undefined) ||
       // diagnol bottom to top winner
       ((boardGame["a3"] == boardGame["b2"]) && (boardGame["b2"] == boardGame["c1"]) && boardGame["c1"] != undefined))
       { // updating alerts to be specific to the winner
            if (isPlayerOnesTurn == true) {
            alert("Craft beer is the winner! Hit reset to play again");
          } else {
            alert("Craft coffee is the winner! Hit reset to play again");
        };
        haveAWinner = true;
        return;
      };
    // adding check to see if squares are still free
    var spacesTaken = Object.keys(boardGame);
    if (spacesTaken.length === 9) {
      alert("We have a draw! Hit reset to play again.");
      return;
    };
  }
