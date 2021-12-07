"use strict";
var L01_Iterations;
(function (L01_Iterations) {
    solution(20);
    function solution(_n) {
        if (_n <= 0)
            return 0;
        let binaryGap = { isOpened: false, isClosed: false, count: 0 };
        let binaryGaps = [];
        let binary = parseInt(_n.toString(2));
        console.log("number: " + _n);
        console.log("binary: " + binary);
        let splitted = _n.toString(2).split("");
        console.log(splitted);
        for (let element of splitted) {
            console.log(element);
            if (element == "1" && !binaryGap.isOpened) {
                binaryGap.isOpened = true;
            }
            else if (element == "1" && binaryGap.isOpened) {
                binaryGap.isClosed = true;
                binaryGaps.push(binaryGap);
                break;
            }
            else if (element == "0" && binaryGap.isOpened)
                binaryGap.count++;
        }
        console.log(binaryGap);
        //if (splitted[splitted.length - 1] == "" && splitted[0] == "")
        //   console.log("in");
        //splitted.sort();
        //console.log(splitted[splitted.length - 1].length);
        return 0;
    }
})(L01_Iterations || (L01_Iterations = {}));
//# sourceMappingURL=L01_Iterations.js.map