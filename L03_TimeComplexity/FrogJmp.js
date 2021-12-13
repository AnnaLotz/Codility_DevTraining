"use strict";
var FrogJmp;
(function (FrogJmp) {
    let x;
    let y;
    let d;
    x = 10;
    y = 85;
    d = 30;
    solution(x, y, d);
    console.log(solution2(x, y, d));
    //own solution:
    function solution(X, Y, D) {
        let jumps = 0;
        let position = X;
        while (position < Y) {
            position += D;
            jumps++;
        }
        return jumps;
    }
    //because own solution has very bad performance, searched for the Problem and tried out to implement the solution only with calculations
    function solution2(X, Y, D) {
        let distance = Y - X;
        let jumps = 0;
        jumps = distance / D;
        if (distance % D == 0) {
            return jumps;
        }
        return Math.floor(jumps) + 1;
    }
})(FrogJmp || (FrogJmp = {}));
//# sourceMappingURL=FrogJmp.js.map