/**
* Handles everything regarding the ship's design, 
* coordinates and movements. createShip() is then evoked
* in setup.js.
*/

function createShip(x, y) {
    return {
    x: x,
    y: y,
    design: function() {
        rectMode(CENTER);
        rect(this.x, this.y, 50, 20);
        rect(this.x, this.y - 20, 15, 20);    
    }
  };
}

function moveShip() {
  if (keyIsDown(LEFT_ARROW) && ship.x > 25) {
    ship.x = ship.x - 5;
  } else if (keyIsDown(RIGHT_ARROW) && ship.x < 375) {
    ship.x = ship.x + 5;
  }
}

function drawShip() {
  ship.design();
}