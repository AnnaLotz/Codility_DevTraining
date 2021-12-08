"use strict";
var L02_OddOccurrencesInArray;
(function (L02_OddOccurrencesInArray) {
    let a = [9, 3, 9, 3, 9, 7, 9];
    console.log(solution(a));
    function solution(A) {
        console.log(A);
        do {
            let index = 0;
            for (let numb of A) {
                //console.log(numb);
                //let numTofind: number = numb;
                for (let i = index + 1; i < A.length; i++) {
                    if (numb == A[i]) {
                        console.log(numb + " = " + A[i]);
                        console.log(A);
                        A.splice(i, 1);
                        A.splice(index, 1);
                        console.log(A);
                        break;
                    }
                }
                index++;
            }
            console.log(A);
        } while (A.length > 1);
        return A[0];
    }
})(L02_OddOccurrencesInArray || (L02_OddOccurrencesInArray = {}));
//# sourceMappingURL=L02_OddOccurrencesInArray.js.map