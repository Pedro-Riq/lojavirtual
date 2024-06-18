let initialTimer = document.querySelector('.initial-timer');
let endTimer = document.querySelector('.end-timer');
let timerLocal = document.querySelector('.demo span');


function initTimer() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    timerLocal.innerHTML = `${h}:${m}:${s}`;
}
function endingTimer() {

}

initialTimer.addEventListener('click', initTimer);
endTimer.addEventListener('click', endingTimer);