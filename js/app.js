// Step 1: Select variables
//Step 1.1: Select No. of square varibales
var numSquares = 6;
//Step 1.2: Select color variables to generate random colors
var colors = generateRandomColors(numSquares);
//Step 1.3:Select squares
var squares = document.querySelectorAll(".square");
//Step 1.4: Select picked color variable
var pickedColor = pickColor();
//Step 1.5: Select RGB color display
var colorDisplay = document.getElementById("colorDisplay");
//Step 1.6: Select message to display when squares are selected
var messageDisplay = document.querySelector("#message");
//Step 1.7: Select header element to display correct rgb color
var h1 = document.querySelector("h1");
//Step 1.8: Select reset button to allow player to start game again
var resetButton = document.querySelector("#reset");
//Step 1.9: Select Easy mode button option to begin its function
var easyBtn = document.querySelector("#easyBtn");
//Step 1.10: Select Hard mode button option to begin its function
var hardBtn = document.querySelector("#hardBtn");
var numberOfSquares = 6;


//Step 2: Create click event for easy mode option

easyBtn.addEventListener("click", function(){
//Step 2.1: Select hard mode to be removed once easy mode is selected
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
//Step 2.2: Select number of squares for easy mode - index starts from 0!
  numSquares = 2;
//Step 2.3: Select color of squares to generate random colors
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
  //Step 2.4: Set bottom 3 squares to not be display when easy mode is selected
    } else {
      squares[i].style.display = "none";
    }
  }
});

//Step 3: Create click event functionality for hard mode option

hardBtn.addEventListener("click", function(){
//Step 3.1: Select easy mode to be removed once hard mode has been selected
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
//Step 3.2: Select number of squares for hard mode
  numSquares = 6;
//Step 3.2: Select random colors to be generated
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
//Step 3.4: Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
//Step 3.5: Change colors of squares
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
 }
);

//Step 4: Create click event functionality for reset button

resetButton.addEventListener("click", function(){
  //Step 4.1: Generate all new colors
  colors = generateRandomColors(numSquares);
  //Step 4.2: Pick a new random color from array
  pickedColor = pickColor();
  //Step 4.3: Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //Step 4.4: Reset button to display new colors option
  this.textContent = "New Colors";

  messageDisplay.textContent = "";
  //Step 4.5: Change color of squares
  for(var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
  }
  //Step 4.6: background color in header to be reset to house style color
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
//add initial colors to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to PickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent= "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.background = "black";
      messageDisplay.textContent = "Try Again"
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
