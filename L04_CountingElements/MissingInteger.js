"use strict";
var MissingInteger;
(function (MissingInteger) {
    let a = [9, 8, 6, 7, 5, 4, 1, 2, 3, 12, 10];
    console.log(solution(a));
    function solution(A) {
        A.sort((a, b) => a - b);
        let missing = 1;
        for (let i = 0; i < A.length; i++) {
            if (A[i] == missing)
                missing++;
            else if (A[i] >= missing)
                continue;
            else if (A[i] > missing)
                break;
        }
        return missing;
    }
})(MissingInteger || (MissingInteger = {}));
//# sourceMappingURL=MissingInteger.js.map