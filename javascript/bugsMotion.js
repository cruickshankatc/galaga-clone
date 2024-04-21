/**
* Sends the bugs following down
*/
function motionPhase1() {
    if (theBugs.length > 0) {
      //Picks a random bug from theBugs[]
      let ranBug = floor(random(0, theBugs.length));

      //Picks a random bug for the speed of the bug. The
      //speed of the x and y movements will vary at points
      //and even vary from each other, but it will all be
      //relative to this.
      theBugs[ranBug].speed = floor(random(1, 5));

      //bug.x is set equal to bug.x2 to stabilize its 
      //position
      theBugs[ranBug].x = theBugs[ranBug].x2;

      //stores the coordinates of the bug when it started
      //its downward trajectory. Needed for the twirling.
      theBugs[ranBug].x3 = theBugs[ranBug].x

      if (theBugs[ranBug].rightAligned) {
        theBugs[ranBug].speed = -theBugs[ranBug].speed;
      }

      /** 
      * Checks to see if that bug is already in motion
      * (either going up or down). If it is, another
      * random bug from theBugs[] is selected.
      */
      if (theBugs[ranBug].goingDown ||                             theBugs[ranBug].goingUp) {
        ranBug = floor(random(0, theBugs.length));
      } else {
        //bug.goingDown is set to true
        theBugs[ranBug].goingDown = true;
      }
  }
}

function motionPhase2(bug) {
  bug.goingDown = false;
  bug.goingUp = true;
}

function motionPhase3(bug) {
  bug.goingUp = false;
  bug.y = bug.y2;
}