"use strict";
var L02_CyclicRotation;
(function (L02_CyclicRotation) {
    let a = [];
    let k = 3;
    console.log(solution(a, k));
    function solution(A, K) {
        if (A.length <= 0)
            return [];
        let lastNumber;
        for (let i = 0; i < K; i++) {
            lastNumber = A[A.length - 1];
            A.splice(A.length - 1);
            A.unshift(lastNumber);
        }
        return A;
    }
    //doesn't work right
    // function solution2(A: number[], K: number): number[] {
    //     if (A.length <= 0)
    //         return [];
    //     let lastNumbers: number[] = [];
    //     for (let i: number = 0; i < K; i++) {
    //         lastNumbers.unshift(A[A.length - 1]);
    //         A.splice(A.length - 1);
    //     }
    //     return lastNumbers.concat(A);
    //}
})(L02_CyclicRotation || (L02_CyclicRotation = {}));
//# sourceMappingURL=L02_CyclicRotation.js.map