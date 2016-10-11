// Select variables
//Select No. of square varibales
var numSquares = 6;
//Select color variables to generate random colors
var colors = generateRandomColors(numSquares);
//Select squares
var squares = document.querySelectorAll(".square");
//Select picked color variable
var pickedColor = pickColor();
//Select RGB color display
var colorDisplay = document.getElementById("colorDisplay");
//Select message to display when squares are selected
var messageDisplay = document.querySelector("#message");
//Select header element to display correct rgb color
var h1 = document.querySelector("h1");
//Select reset button to allow player to start game again
var resetButton = document.querySelector("#reset");
//Select Easy mode button option to begin its function
var easyBtn = document.querySelector("#easyBtn");
//Select Hard mode button option to begin its function
var hardBtn = document.querySelector("#hardBtn");
var numberOfSquares = 6;
//Set scoring variable
var score = 0;
//Select variable for score to be displayed
var scoreDisplay = document.querySelector("#scoreDisplay");
//Select no. of max points user recieves from selecting squares
var maxPoints = 60;
var audio = new Audio('correct.m4a');
var audio1 = new Audio('wrong.m4a');

//Create click event for easy mode option

easyBtn.addEventListener("click", function(){
//Select hard mode to be removed once easy mode is selected
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
//Select number of squares for easy mode - index starts from 0!
  numSquares = 2;
//Select max points from easy mode
  maxPoints =30;
//Select color of squares to generate random colors
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
  //Set bottom 3 squares to not be display when easy mode is selected
    } else {
      squares[i].style.display = "none";
    }
  }
});

//Create click event functionality for hard mode option

hardBtn.addEventListener("click", function(){
//Select easy mode to be removed once hard mode has been selected
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
//Select number of squares for hard mode
  numSquares = 6;
//Select max points for hard mode
  maxPoints = 60;
//Select random colors to be generated
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
//Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
//Change colors of squares
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
 }
);

//Create click event functionality for reset button

resetButton.addEventListener("click", function(){
  //Generate all new colors
  colors = generateRandomColors(numSquares);
  //Pick a new random color from array
  pickedColor = pickColor();
  //Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //Reset button to display new colors option
  this.textContent = "New Colors";
  //Sum to determine points system is in multiples of 10
  maxPoints = colors.length * 10;
  messageDisplay.textContent = "";
  //Change color of squares
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
  }
  //background color in header to be reset to house style
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;
//Workings for functionality when user selects correct color
for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
//Add initial colors to squares
  squares[i].addEventListener("click", function(){
    //Grab color of clicked squares
    var clickedColor = this.style.background;
    //Compare color to PickedColor
    if(clickedColor === pickedColor) {
    //If correct color is picked, strip to display "Correct"
      messageDisplay.textContent = "Correct";
      audio.play();
    //When correct add score to scoreboard
      score = maxPoints + score;
      scoreDisplay.textContent = score;
      resetButton.textContent= "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "black";
      messageDisplay.textContent = "Try Again"
      audio1.play();
      maxPoints = maxPoints -10;
      console.log(maxPoints);
    }
  });

}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to matach given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  //repeat num times
  for(var i = 0; i <= num; i++) {
    arr.push(randomColor());

  }
  //retrun that array
  return arr;
}
function randomColor() {
    //pick a "red" from 0 -255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
