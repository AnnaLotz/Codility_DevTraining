"use strict";
var PermMissingElem;
(function (PermMissingElem) {
    let A = [];
    A[0] = 2;
    A[1] = 3;
    A[2] = 1;
    A[3] = 5;
    console.log(solution(A));
    function solution(A) {
        if (A.length == 0)
            return 1;
        let count = A.length + 1;
        let supposedTotal = (count * (count + 1)) / 2;
        console.log("supposedTotal: " + supposedTotal);
        let total = 0;
        for (let numb of A) {
            total += numb;
        }
        console.log("total: " + total);
        return supposedTotal - total;
    }
})(PermMissingElem || (PermMissingElem = {}));
//# sourceMappingURL=PermMissingElem.js.map