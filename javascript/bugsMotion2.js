//Deals with the timed actions for the bugs
let intervalID;

function startOrStopInterval() {
    let anyBugGoingDownOrUp = theBugs.some(bug => !bug.goingDown || !bug.goingUp);
    if (anyBugGoingDownOrUp && !gameOver) {
        if (!intervalID) {
            intervalID = setInterval(chimmy, 3000);
        }
    } else {
        clearInterval(intervalID);
        intervalID = undefined;
    }
}