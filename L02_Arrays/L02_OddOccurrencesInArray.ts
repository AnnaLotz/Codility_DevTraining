namespace L02_OddOccurrencesInArray {

    let a: number[] = [9, 3, 9, 3, 9, 7, 9];

    console.log(solution(a));

    function solution(A: number[]): number {

        console.log(A);
        do {
        let index: number = 0;
        for (let numb of A) {
            //console.log(numb);
            //let numTofind: number = numb;
            
            for (let i: number = index + 1; i < A.length; i++) {
                
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
}