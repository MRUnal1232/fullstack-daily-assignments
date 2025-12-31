var timerText = document.querySelector("#timerText");
var statusText = document.querySelector("#statusText");
var dateText = document.querySelector("#dateText");

function digitalClock() {

    setInterval(() => {

        let dateObj = new Date(); 
        let hr = dateObj.getHours();
        let min = dateObj.getMinutes();
        let sec = dateObj.getSeconds();

        hr = hr < 10 ? `0${hr}` : hr;
        min = min < 10 ? `0${min}` : min;
        sec = sec < 10 ? `0${sec} `: sec;

        timerText.innerHTML = `${hr} : ${min} : ${sec}`;
        statusText.innerHTML = hr < 12 ? "AM" : "PM";

       
        let day = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();

        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
        year = year < 10 ? `0${year}` : year;

        dateText.innerHTML = `${day} / ${month} / ${year}`;
    }, 1000);
}

digitalClock()