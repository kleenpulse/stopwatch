let minDisplay = document.getElementById('min')
let secDisplay = document.getElementById('sec')
let miliDisplay = document.getElementById('mili')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')
let btns = document.querySelectorAll('.btn')
let mili = 0
let sec = 0
let min = 0
let timerId

function startWatch() {
    mili++
    miliDisplay.textContent = mili
    secDisplay.textContent = `0${sec} :`
    minDisplay.textContent = `0${min} :`
    if (mili >= 100) {
        sec++
        mili = 0
    }
    if (sec >= 10) secDisplay.textContent = `${sec} :`
    if (sec >= 60) {
        min++
        sec = 0
    }
    min >= 1 ? minDisplay.textContent = `${min}min :` : min
    if (min >= 60) {
        secDisplay.textContent = '00 :'
        miliDisplay.textContent = '00'
        window.clearInterval(timerId)
    }
}

// make the btns work
stopBtn.disabled = true
resetBtn.disabled = true
startBtn.onclick = function () {
    timerId = setInterval(startWatch, 10)
    this.disabled = true
    stopBtn.disabled = false
    resetBtn.disabled = false
    if (!(stopBtn.disabled)) {
        stopBtn.textContent = 'Pause'
    }
    checkBtns()
}
stopBtn.onclick = function () {
    this.textContent = 'Paused'
    startBtn.disabled = false
    startBtn.textContent = 'Play'
    checkBtns()
    clearInterval(timerId)
}

resetBtn.onclick = function () {
    window.clearInterval(timerId)
    startBtn.disabled = false
    this.disabled = true
    stopBtn.disabled = true
    min = 0
    sec = 0
    mili = 0
    secDisplay.textContent = '00 :'
    miliDisplay.textContent = '00'
    checkBtns()
    minDisplay.textContent = '00 :'
}
// check buttons
function checkBtns() {
    btns.forEach(btn => {
        if (btn.disabled) {
            btn.classList.add('disable')
        }else{
            btn.classList.remove('disable')
        }
    })

}
checkBtns()