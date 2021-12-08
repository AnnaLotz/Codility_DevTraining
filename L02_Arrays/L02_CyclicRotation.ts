namespace L02_CyclicRotation {

    let a: number[] = [3, 8, 9, 7, 6];
    let k: number = 5;

    console.log(a);
    console.log(solution(a, k));



    function solution(_a: number[], _k: number): number[] {

        for (let i: number = 0; i < _k; i++) {
            //take last element in a and put at start
            let lastNumber: number = _a[_a.length - 1];
            console.log(lastNumber);
            _a.splice(_a.length - 1);
            _a.unshift(lastNumber);

        }

        return _a;
    }


    function solution2(_a: number[], _k: number): number[] {

//        in der schleife ein array befüllen, das an den anfang gesetzt werden soll
        return[];
    }
}