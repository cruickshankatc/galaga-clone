/**
* Creates an array called theBugs[] and then fills that
* array with 40 empty objects
*
* Also, gives each bug a property called "goingDown"
*/
let theBugs = [];

//Fills the theBugs with 40 empty objects
for (i = 0; i < 40; i++) {
  theBugs.push({});
}

//Creates the necessary properties for the object
theBugs.forEach(bug => {
  //goingDown and goingUp are simple booleans used to
  //see if the bug is the state of motion. Monitoring
  //the bug's state of motion is important in determining
  //which actions must be performed upon it.
  bug.goingDown = false;
  bug.goingUp = false;
  
  //x and y are the positions of the bugs at any point
  //whether in motion or in the hive. x2 and y2 simply
  //hold the positions of the bugs in accordance to 
  //their place in the hive. x2 is moves back and forth
  //within a certain range. y2 is a fixed number.
  bug.x = 0;
  bug.x2 = 0;
  bug.y = 0;
  bug.y2 = 0;
  
  //holds the color of the bug. bugs are assigned color
  //depending upon their number in the array.
  bug.color = undefined;
})


/**
* Deals with the fly down animations for the bugs
*/
theBugs.forEach(bug => {
  bug.flyingDown = function() {
    //Regulates the speed the bug falls at
    if (this.goingDown) {
      this.y += 5.6;
    //Regulates the speed the bug rises at
    } else if (!this.goingDown && this.goingUp) {
      this.y -= 1.6;
    }
  };
});


/**
* Handles the distribution of bugs into x rows and y
* columns.
*/
for (let i = 0; i < theBugs.length; i++) {
  if (i < 4) {
    theBugs[i].x = 125 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 50;
  } else if (i < 12) {
    theBugs[i].x = -25 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 75;
  } else if (i < 20) {
    theBugs[i].x = -225 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 100;
  } else if (i < 30) {
    theBugs[i].x = -450 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 125;      
  } else if (i < 40) {
    theBugs[i].x = -700 + i * 25;
    theBugs[i].x2 = theBugs[i].x;
    theBugs[i].y2 = 150;      
  }
}

/**
* Assigns the different colors to the different bugs
*/
for (let i = 0; i < theBugs.length; i++) {
  if (i < 4) {
    theBugs[i].color = "#00FF00"; // Green
  } else if (i < 20) {
    theBugs[i].color = "#FF0000"; // Red
  } else {
    theBugs[i].color = "#0000FF"; // Blue
  }
}

/**
* Assigns to y2 (which will be used to determine the
* bug's position in draw.js) the same positions as y,
* which are simply the default positions.
*/
theBugs.forEach(bug => {
  bug.y = bug.y2;
})