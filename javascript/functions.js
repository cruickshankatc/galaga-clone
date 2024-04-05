function chimmy() {
    let x = floor(random(0, theBugs.length));
    
    if (theBugs[x].goingDown === true || theBugs[x].goingUp === true) {
      x = floor(random(0, theBugs.length));
    } else {
      theBugs[x].goingDown = !theBugs[x].goingDown;
      theBugs[x].x = theBugs[x].x2;
    }
}

function chongu(bug) {
  bug.goingDown = false;
  bug.goingUp = true;
//  bug.x4 = bug.x3;
}

function chase(bug) {
  bug.goingUp = false;
  bug.y2 = bug.y;
}