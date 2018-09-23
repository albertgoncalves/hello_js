// tsc let_timer.ts ; node let_timer.js

for (let i: number = 0; i < 10; i++) {
    setTimeout(
        function() {
            console.log(i)
        }, 100 * i
    )
}
