function bugsCollision(bug, index) {
  if (bug.color === "#00FF00") {
      bug.color = "#7D00FF"
      spacePressed = false;
  } else {
      theBugs[index].goingDown = false;
      theBugs[index].goingUp = false;
      theBugs.splice(index, 1);
      spacePressed = false;
  }
}