"use strict";
var L02_CyclicRotation;
(function (L02_CyclicRotation) {
    let a = [3, 8, 9, 7, 6];
    let k = 5;
    console.log(a);
    console.log(solution(a, k));
    function solution(_a, _k) {
        for (let i = 0; i < _k; i++) {
            //take last element in a and put at start
            let lastNumber = _a[_a.length - 1];
            console.log(lastNumber);
            _a.splice(_a.length - 1);
            _a.unshift(lastNumber);
        }
        return _a;
    }
    function solution2(_a, _k) {
        //        in der schleife ein array befüllen, das an den anfang gesetzt werden soll
        return [];
    }
})(L02_CyclicRotation || (L02_CyclicRotation = {}));
//# sourceMappingURL=L02_CyclicRotation.js.map