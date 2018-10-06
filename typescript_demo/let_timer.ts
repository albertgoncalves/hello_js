// $ tslint let_timer.ts; tsc let_timer.ts; node let_timer.js;

for (let i: number = 0; i < 10; i++) {
    setTimeout(
        () => {
            console.log(i);
        }, 100 * i
    );
}
