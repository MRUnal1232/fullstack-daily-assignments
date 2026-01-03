var timerText = document.querySelector('#timerText')
var timerInput = document.querySelector('#timerInput')
var btnStart = document.querySelector('#btnStart')
var btnStop = document.querySelector('#btnStop')
var statusText = document.querySelector('#statusText')

timerText.innerHTML = "00 : 00"
statusText.innerHTML = "Timer is ready."

var totalSeconds = 0
var timerObj = null

btnStart.addEventListener('click', () => {
    if (timerInput.value === "") {
        alert("Time in minutes is required !!")
        return
    }

    totalSeconds = Number.parseInt(timerInput.value) * 60

    timerObj = setInterval(() => {
        totalSeconds -= 1

        if (totalSeconds <= 0) {
            clearInterval(timerObj)
            statusText.textContent = "Timer is stopped."
        }

        let min = Math.floor(totalSeconds / 60)
        let sec = totalSeconds % 60

        min = min < 10 ? "0" + min : min
        sec = sec < 10 ? "0" + sec : sec

        timerText.innerHTML = min + " : " + sec

    }, 1000);

    statusText.innerHTML = "Timer is running."
})

btnStop.addEventListener('click', () => {
    totalSeconds = 0
    timerText.innerHTML = "00 : 00"
    clearInterval(timerObj)
    statusText.textContent = "Timer is stopped."
}) 