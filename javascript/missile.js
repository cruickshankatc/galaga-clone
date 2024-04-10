/**
* Controls the speed of the missile
*/
let motion = 6;

/**
* Will be used in determining the xPos of the missile
*/
let firing2;

/**
* Gives the coordinates and properties for the missile that
* are referenced when the missile is drawn in draw.js
*/
let missile = {
  x: 200,
  y: 320,
  w: 20,
  l: 5,
}

/**
* Deals with what happens when different keys are pressed.
*
* When spaceBar is pressed the "spacePressed" variabe 
* becomes true which draws and launches the missile
*
* If "X" key is pressed then an item from theBugs is 
* spliced.
*/
function keyPressed() {
  if (keyCode === 32 && !spacePressed) {
    spacePressed = true;
    firing2 = ship.x;
  } else if (keyCode === 88) {
    gameOver = true;
  }
}

