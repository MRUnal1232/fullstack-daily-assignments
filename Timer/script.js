var timerText = document.querySelector('.box h2');
var btnAction = document.querySelector('.box button');

var timeObj = null;
var totalSeconds = 0;

btnAction.addEventListener('click', () => {
if (btnAction.innerHTML === "START") {
    timeObj = setInterval(() => {
       totalSeconds+=1;   
        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60;

            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            timerText.innerHTML = min+":"+sec
    }, 1000);
    btnAction.innerHTML = "STOP";

    } else {
        clearInterval(timeObj); 
        timerText.innerHTML = "00:00";
        btnAction.innerHTML = "START";
        totalSeconds = 0;

    }
});