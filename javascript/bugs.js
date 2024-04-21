
//Array for the enemies or 'bugs'
let theBugs = [];

//Fills theBugs[] with 40 empty objects and needed properties
//These properties are defined and changed in loops and functions
for (i = 0; i < 40; i++) {
  theBugs.push({
  //Check if bugs are in motion
  goingDown: false,
  goingUp: false,
  
  //Position of the bug
  x: 0,
  y: 0,

  //Holds or marks key positions that bug's must return to
  x2: 0,
  x3: 0,
  y2: 0,
  
  //Bugs are given distinct characteristics depending on color. 
  color: undefined,

  //Gives the bug a name based on their color
  name: undefined,
  
  //Divides the bugs depending on whether they are closer to the left or right
  //Important for the animations
  leftAligned: undefined,
  rightAligned: undefined,

  flyUp: undefined,
  flyDown: undefined,
  
  //Determines the point at which, after flying down, a bug should fly back up.
  //Relates to the y value
  bottomPoint: undefined,

  fallPos: -100,
  });
}


/**
 * Deals with the fly down animations for the bugs.
 * Each time a bug flies down they do so at a different speed that is 
 * randomly generated.
 */
theBugs.forEach(bug => {
  bug.inMotion = function() {
    //Regulates the falling speed
    if (this.goingDown) {
      bug.flyDown(bug);   
    //Regulates the rising speed
    } else if (this.goingUp && !this.goingDown) {
      bug.flyUp(bug);
    }
  };
});

/**
 * Handles the layout of the bugs.
 * 
 * The x and y values are used for the bugs' motion.
 * 
 * The x2 and y2 values are used to hold consistent positions for the x and y values
 * to return to. Therefore x2 and y2 are set equal to x and y's default positions.
 */
for (let i = 0; i < theBugs.length; i++) {
  if (i < 4) {
    theBugs[i].x = 125 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 50;
    theBugs[i].y = theBugs[i].y2;
  } else if (i < 12) {
    theBugs[i].x = -25 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 75;
    theBugs[i].y = theBugs[i].y2;
  } else if (i < 20) {
    theBugs[i].x = -225 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 100;
    theBugs[i].y = theBugs[i].y2;
  } else if (i < 30) {
    theBugs[i].x = -450 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 125;
    theBugs[i].y = theBugs[i].y2;      
  } else if (i < 40) {
    theBugs[i].x = -700 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 150; 
    theBugs[i].y = theBugs[i].y2;     
  }
}

/**
* Assigns different colors to the different bugs.
* Also, assigns properties to  bugs according to their color.
*/
for (let i = 0; i < theBugs.length; i++) {
  if (i < 4) {
    theBugs[i].color = "#00FF00"; // Green
    theBugs[i].name = "Green Bug";
    theBugs[i].bottomPoint = 425;
    theBugs[i].flyDown = greenBugFlyDown;
    theBugs[i].flyUp = greenBugFlyUp;
  } else if (i < 20) {
    theBugs[i].color = "#FF0000"; // Red
    theBugs[i].name = "Red Bug";
    theBugs[i].bottomPoint = 425;
    theBugs[i].flyDown = redBugFlyDown;
    theBugs[i].flyUp = redBugFlyUp;
  } else {
    theBugs[i].color = "#0000FF"; // Blue
    theBugs[i].name = "Blue Bug";
    theBugs[i].bottomPoint = 400;
    theBugs[i].flyDown = blueBugFlyDown;
    theBugs[i].flyUp = blueBugFlyUp;
  }
}

//Assigns the left or right alignment
theBugs.forEach(bug => {
  if (bug.x <= 150) {
    bug.leftAligned = true;
    bug.rightAligned = false;
  } else if (bug.x >= 150) {
    bug.leftAligned = false;
    bug.rightAligned = true;
  }
})