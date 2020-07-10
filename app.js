var startMsec = 0 
var startSec = 0 
var startMin = 0 
var milisecond = document.getElementById('msec')
var second = document.getElementById('sec')
var minutes = document.getElementById('min')
var button = document.getElementById('startbtn')
var interval;

function stopwatch() {
    startMsec++
    // console.log(startMsec)
    milisecond.innerHTML = startMsec;
    if (startMsec >= 100){
        startSec++
        second.innerHTML = startSec;
        startMsec = 0 
    } if (startSec >= 59){
        startMin++
        minutes.innerHTML = startMin;
        startSec = 0
    }
}
function start(){
    button.disabled = true;

    interval = setInterval(stopwatch,10)
} 
function stop(){
    button.disabled = false;

 clearInterval(interval)
}
function reset(){
    button.disabled = false;

    stop()
    startSec = 0
    startMsec = 0
    startMin = 0
    milisecond.innerHTML = startMsec
    second.innerHTML = startSec
    minutes.innerHTML = startMin
}
