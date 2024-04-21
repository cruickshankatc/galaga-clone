//editing starts now

let firing = 320; 

function draw() {
  /**
  * Gives us the background color
  */
  background(0);
  
  /**
  * Draws a missile based on the missile properties within
  * the missile object from missile.js. The missile is only 
  * drawn when "spacePressed" is turned to "true".
  *
  * "spacePressed" is then turned to "false" again once the 
  * missile's y position (currently set to "firing") 
  * reaches "0"
  */
  fill(255, 255, 255);
  if (spacePressed && !gameOver) {
    rect(firing2, firing, missile.l, missile.w);
    firing -= motion;
  } else if (!spacePressed) {
    firing = missile.y;
  }
 /**
  * Simply console logs the length of theBugs[] for         * testing purposes. On collision with objects from         * theBugs[] and object in the array is removed.
  */
  if (firing <= 0) {
    spacePressed = false;
  } 
  
  /**
  * Deals with collisions with the missile and items in   
  * theBugs[] to ensure that when the missile's               * coordinates match a bug that bug is spliced.
  * 
  * When a green bug is hit, they are not spliced. Instead,
  * their color simply changes to purple.
  *
  * Any time a missile hits a bug the position of missile 
  * resets.
  */
theBugs.forEach((bug, index) => { 
    //Gives the bugs a wider hitbox
    if (
        spacePressed &&
        missile && 
        firing2 >= bug.x - 12.5 && 
        firing2 <= bug.x + 12.5 && 
        firing >= bug.y - 12.5 && 
        firing <= bug.y + 12.5
       ) {
         bugsCollision(bug, index);
       } else if (
        !gameOver &&
        ship.x - 25 < bug.x + 12.5 &&
        ship.x + 25 > bug.x - 12.5 &&
        ship.y - 10 < bug.y + 12.5 &&
        ship.y + 10 > bug.y - 12.5
     ) {
        bugsCollision(bug, index);
        gameOver = true;
     }
    if (!bug.goingDown && !bug.goingUp) {
      bug.x = bug.x2;
    }
});
  
  /**
  * Calls drawShip() and moveShip() from ship.js
  */ 
  if (!gameOver) {
    drawShip();
    moveShip();
  }
  
  /**
  * Controls the speed at which the bugs move back and       * forth along with the overall distance they cover.
  */
  theBugs.forEach(bug => bug.x2 += 0.3 * direction);
  
  /**
  * Determines the speed at which the distance the ships     * can move back and forth from. The if statement then
  * simply makes sure they go the other way once they 
  * reach their limit.
  */
    
  originPoint2 += 0.1 * direction;
  
  if (originPoint2 < (originPoint - 15) || originPoint2 >     (originPoint + 15)) {
    direction *= -1;
  }
  
  /**
  * Loops through the theBugs[] and assigns a fill value     * for each bug and then draws them.
  * If the bug is within different ranges it gets different
  * colors but is still nonetheless drawn.
  */
  theBugs.forEach((bug, i) => {
    fill(bug.color);
    ellipseMode(CENTER);
    ellipse(bug.x, bug.y, 25);
  });
  

  /**
  * Text appears on screen to let the player know that 
  * they've won.
  */
  
  if (theBugs.length === 0) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255); 
    text("Swag!", width/2, height/2);
  } else if (gameOver) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255); 
    text("Game Over!", width/2, height/2);    
  }
  
  for (i = 0; i < theBugs.length; i++) {
    theBugs[i].inMotion();
  }
  
  /**
  * Deals with what happens when the bug reaches the 
  * botton of the screen so it goes back.
  * The second part deals with re-aligning the bug to 
  * the rest of the hive once it gets high enough.
  */
  
  theBugs.forEach(bug => {
    if (bug.y >= bug.bottomPoint) {
      motionPhase2(bug);
    } else if (
      ((bug.x === bug.x2 && bug.y >= bug.y2) &&
      bug.name === "Red Bug") || 
      ((bug.x === bug.x2 && bug.y >= bug.y2) &&
      bug.name === "Green Bug") ||
      ((bug.x === bug.x2 && bug.y <= bug.y2) &&
      bug.name === "Blue Bug") 
    ) {
      motionPhase3(bug);
    }
  })
  
  if (gameOver) {
    clearInterval(intervalID);
    intervalID = undefined;
  }
  
}

// Call the function initially
startOrStopInterval();
