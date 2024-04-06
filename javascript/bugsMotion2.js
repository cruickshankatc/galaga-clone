// function johnson() {
//   console.log(theBugs.length);
// }

// setInterval(johnson, 3000);

//Deals with the timed actions for the bugs
let intervalID;

function startOrStopInterval() {
    let anyBugGoingDownOrUp = theBugs.some(bug => !bug.goingDown || !bug.goingUp);
    if (anyBugGoingDownOrUp) {
        if (!intervalID) {
            intervalID = setInterval(chimmy, 3000);
        }
    } else {
        clearInterval(intervalID);
        intervalID = undefined;
    }
}