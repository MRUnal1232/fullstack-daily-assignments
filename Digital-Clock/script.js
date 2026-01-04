var timerText = document.querySelector("#timerText");
var statusText = document.querySelector("#statusText");
var dateText = document.querySelector("#dateText");
var progressBar = document.querySelector("#progressBar");
var msgText = document.querySelector("#msgText");

const sysMessages = ["SYSTEM ONLINE", "SYNCING...", "SECURE", "OPTIMAL", "CONNECTED"];

function digitalClock() {
    let dateObj = new Date();
    
    let hr = dateObj.getHours();
    let min = dateObj.getMinutes();
    let sec = dateObj.getSeconds();
    
    let amPm = hr < 12 ? "AM" : "PM";
    
    let displayHr = hr % 12 || 12; 

    displayHr = displayHr < 10 ? `0${displayHr}` : displayHr;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    timerText.innerHTML = `${displayHr} : ${min} : ${sec}`;
    statusText.innerHTML = amPm;

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateText.innerHTML = dateObj.toLocaleDateString('en-US', options).toUpperCase();

    let progressPercentage = (dateObj.getSeconds() / 60) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (progressPercentage > 85) {
        progressBar.style.background = "#ff0055";
        progressBar.style.boxShadow = "0 0 15px #ff0055";
    } else {
        progressBar.style.background = "#00f260";
        progressBar.style.boxShadow = "0 0 15px #00f260";
    }
}

setInterval(() => {
    let randomMsg = sysMessages[Math.floor(Math.random() * sysMessages.length)];
    msgText.innerText = randomMsg;
}, 5000);

digitalClock();
setInterval(digitalClock, 1000);