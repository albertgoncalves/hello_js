// $ tslint script.ts ; tsc script.ts

// via https://www.youtube.com/watch?v=9bOlAFoFy0A
// via https://github.com/Microsoft/TypeScript/issues/5710

interface String { repeat(count: number): string;
                   substr(from: number, length?: number): string;
                 }

interface Time { days    : number;
                 hours   : number;
                 minutes : number;
                 seconds : number;
                 mseconds: number;
               }

const startTimer = (id: string, deadline: number) => {

    const timerInterval = setInterval(
        () => {
            const clock = document.getElementById(id);
            const timer = updateTimer(deadline);

            if (timer.mseconds < 1) {
                clock.innerHTML = "<span>0</span>".repeat(4);
                clearInterval(timerInterval);
            } else {
                clock.innerHTML = "<span>" + timer.days    + "</span>"
                                + "<span>" + timer.hours   + "</span>"
                                + "<span>" + timer.minutes + "</span>"
                                + "<span>" + timer.seconds + "</span>";

                const spans = clock.getElementsByTagName("span");

                animateClock(spans[3]);
                if (timer.seconds === 59) {
                    animateClock(spans[2]);
                    if (timer.minutes === 59) {
                        animateClock(spans[1]);
                        if (timer.hours === 23) {
                            animateClock(spans[0]);
                        }
                    }
                }
            }
        }, 1000);
};

const animateClock = (span) => {
    span.className = "turn";
    setTimeout(() => {
        span.className = "";
    }, 500);
};

const updateTimer = (deadline: number): Time => {
    const now      = +new Date(); // '+' coerce Date() to 'number'
    const mseconds = deadline - now;
    const seconds  = mseconds / 1000;
    const minutes  = seconds  /   60;
    const hours    = minutes  /   60;
    const days     = hours    /   24;
    return { days    : Math.floor(days)
           , hours   : Math.floor(hours)   % 24
           , minutes : Math.floor(minutes) % 60
           , seconds : Math.floor(seconds) % 60
           , mseconds
           };
};

// MAIN

window.onload = () => {
    const deadline = +new Date("September 30, 2018, 22:02:30");
    startTimer("clock", deadline);
};
