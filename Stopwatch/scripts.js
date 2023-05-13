/*---------------------- Timer -----------------------*/
var timerOn = false;

//Initial Time
var mills = 0;
var seconds = 0;
var minutes = 0;

//For timer
const timeGenerator = () => {
    mills += 1;

    if (mills >= 100) {
        seconds += 1;
        mills = 0;
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }
    }

    // format time before displaying
    var msValue = mills < 10 ? `0${mills}` : mills;
    var secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    var minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    $("#timer").html(`<span>${minutesValue}:${secondsValue}:${msValue}</span>`);
};

var interval;

function resetTimer() {
    timerOn = true;
    clearInterval(interval);
    mills = 0;
    seconds = 0;
    minutes = 0;
    interval = setInterval(timeGenerator, 10);
}


/*------------------ Start Button ---------------------*/
function startGame() {
    if (timerOn == false) {
        resetTimer()
    } else {
        clearInterval(interval); // stop
        timerOn = false
    }
}

$("#restartButton").click(startGame);