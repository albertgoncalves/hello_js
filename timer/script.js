// $ tslint script.ts; tsc script.ts;
var startTimer = function (id, deadline) {
    var interval = 1000; // every second
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);
        if (timer.mseconds < 1) {
            clock.innerHTML = "<span>0</span>".repeat(4);
            clearInterval(timerInterval);
        }
        else {
            clock.innerHTML = "<span>" + timer.days + "</span>"
                + "<span>" + timer.hours + "</span>"
                + "<span>" + timer.minutes + "</span>"
                + "<span>" + timer.seconds + "</span>";
            var spans = clock.getElementsByTagName("span");
            animateClock(spans[3]);
            if (timer.seconds === 59) {
                animateClock(spans[2]);
            }
            if (timer.minutes === 59) {
                animateClock(spans[1]);
            }
            if (timer.hours === 23) {
                animateClock(spans[0]);
            }
        }
    }, interval);
};
var animateClock = function (span) {
    var interval = 500;
    span.className = "turn";
    setTimeout(function () {
        span.className = "";
    }, interval);
};
var updateTimer = function (deadline) {
    var now = +new Date(); // '+' coerce Date() to 'number'
    var mseconds = deadline - now;
    var seconds = mseconds / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    return { days: Math.floor(days),
        hours: Math.floor(hours) % 24,
        minutes: Math.floor(minutes) % 60,
        seconds: Math.floor(seconds) % 60,
        mseconds: mseconds
    };
};
// MAIN
window.onload = function () {
    var deadline = +new Date("October 30, 2019, 22:02:30");
    startTimer("clock", deadline);
};
