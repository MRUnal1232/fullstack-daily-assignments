let sec = 0;
let min = 0;
let running = false;
let timerID = null;

const display = document.getElementById("time");
const btn = document.getElementById("btn");

btn.onclick = function () {

    if (!running) {
        
        running = true;
        btn.innerText = "Stop";

        timerID = setInterval(function () {
            sec++;

            if (sec === 60) {
                sec = 0;
                min++;
            }

            let m = (min < 10) ? "0" + min : min;
            let s = (sec < 10) ? "0" + sec : sec;

            display.innerText = m + ":" + s;

        }, 1000);

    } else {
        
        running = false;
        btn.innerText = "Start";
        clearInterval(timerID);

       
        sec = 0;
        min = 0;
        display.innerText = "00:00";
    }
};