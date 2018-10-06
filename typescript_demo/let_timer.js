// $ tslint let_timer.ts; tsc let_timer.ts; node let_timer.js;
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
