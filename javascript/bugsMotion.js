/**
* Sends the bugs following down
*/
function chimmy() {
    //Picks a random bug from theBugs[]
    let x = floor(random(0, theBugs.length));
    
    /** 
    * Checks to see if that bug is already in motion
    * (either going up or down). If it is, another
    * random bug from theBugs[] is selected.
    */
    if (theBugs[x].goingDown || theBugs[x].goingUp) {
      x = floor(random(0, theBugs.length));
    } else {
      //bug.goingDown is set to true
      theBugs[x].goingDown = !theBugs[x].goingDown;
      
      //bug.x is set equal to bug.x2 to stabilize its 
      //position
      theBugs[x].x = theBugs[x].x2;
    }
}

function chongu(bug) {
  bug.goingDown = false;
  bug.goingUp = true;
}

function chase(bug) {
  bug.goingUp = false;
  bug.y = bug.y2;
}