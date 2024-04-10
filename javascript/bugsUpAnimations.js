function greenBugFlyUp(bug) {
  bug.x = bug.x2;
  bug.y = bug.fallPos;
  bug.fallPos += 2;
}

function redBugFlyUp(bug) {
  bug.x = bug.x2;
  bug.y = bug.fallPos;
  bug.fallPos += 2;
}

function blueBugFlyUp(bug) {
  bug.y -= 5;
  bug.speed = 3;
    if (Math.abs(bug.x - bug.x2) < 1) {
      bug.x = bug.x2;
    } else if (bug.x > bug.x2) {
      bug.x -= bug.speed;
    } else if (bug.x < bug.x2) {
      bug.x += bug.speed;
    }
}
