function greenBugFlyDown(bug) {
  bug.x += bug.speed;
  bug.y += 1;  
  
    if (bug.y >= bug.bottomPoint) {
      bug.fallPos = -100;
    } else if (bug.x >= (bug.x3 + 25)) {
      bug.speed = bug.speed * -1;
    } else if (bug.x <= (bug.x3 - 25)) {
      bug.speed = bug.speed * -1;
    } 
}

function redBugFlyDown(bug) {
  bug.x += bug.speed;
  bug.y += 3;  
    
    if (bug.y >= bug.bottomPoint) {
      bug.fallPos = -100;
    } else if (bug.x >= (bug.x3 + 25)) {
      bug.speed = bug.speed * -1;
    } else if (bug.x <= (bug.x3 - 25)) {
      bug.speed = bug.speed * -1;
    } 
}

function blueBugFlyDown(bug) {
  bug.y += 3;
  
  if (bug.y >= 200) {
    bug.x += bug.speed;
  }
  
  if ((bug.x >= (bug.x3 + 100)) || (bug.x <= (bug.x3 - 100))) {
    bug.speed = 0;
  }
}