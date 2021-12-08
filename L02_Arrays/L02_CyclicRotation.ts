namespace L02_CyclicRotation {

    let a: number[] = [];
    let k: number = 3;


    console.log(solution(a, k));



    function solution(A: number[], K: number): number[] {

        if (A.length <= 0)
            return [];

        let lastNumber: number;
        for (let i: number = 0; i < K; i++) {
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
}