namespace PermCheck {
    let A: number[] = [];

    A[0] = 2;
    A[1] = 3;
    A[2] = 1;
    A[3] = 5;
    A[4] = 4;

    console.log(solution(A));

    function solution(A: number[]): number {

        A.sort((a, b) => a - b); // nur A.sort gibt ein falsches Ergebnis

        console.log(A);

        for (let i: number = 0; i < A.length; i++) {
            console.log("check " + A[i] + " != " + (i + 1));
            if (A[i] != i + 1)
                return 0;
        }

        return 1;
    }


    // function solution(A: number[]): number {

    //     A.sort();
    //     console.log(A[A.length - 1]);
    //     console.log(A.length);

    //     if (A[A.length - 1] != A.length)
    //         return 0;

    //     let count: number = A.length;
    //     let supposedTotal: number = (count * (count + 1)) / 2;
    //     console.log("supposedTotal: " + supposedTotal);

    //     let total: number = 0;
    //     for (let numb of A) {
    //         total += numb;
    //     }
    //     console.log("total: " + total);

    //     let difference: number = supposedTotal - total;
    //     return (difference == 0) ? 1 : 0;
    // }
}