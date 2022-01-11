namespace FrogRoverOne {

    let A: number[] = [];

    A[0] = 1;
    A[1] = 3;
    A[2] = 1;
    A[3] = 4;
    A[4] = 2;
    A[5] = 3;
    A[6] = 5;
    A[7] = 4;

    solution(5, A);


    function solution(X: number, A: number[]): number {

        let highestIndex: number = - 1;
        for (let i: number = 1; i <= X; i++) {
            //console.log(i);
            for (let ind: number = 0; ind < A.length; ind++) {
                if (A[ind] == i) {
                    if (ind > highestIndex)
                        highestIndex = ind; 
                    console.log(ind);

                    break;
                }

            }
        }

        //doesnt work if a number in array is missing in general. Needs to stop if it can't find all numbers up to X
        console.log(highestIndex);

        return highestIndex;
    }


    // let highIndex: number = 0;
    //     for (let i: number = 0; i < X; i++) {
    //         for (let j: number = 0; j < A.length; j++) {
    //             if (A[j] == i) {
    //                 highIndex = j;
    //                 console.log("hi");
    //             }
    //         }
    //     }

}