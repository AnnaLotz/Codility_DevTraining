namespace FrogJmp {

    let x: number;
    let y: number;
    let d: number;

    x = 10;
    y = 85;
    d = 30;

    solution(x, y, d);
    console.log(solution2(x, y, d));

    //own solution:
    function solution(X: number, Y: number, D: number): number {

        let jumps: number = 0;
        let position: number = X;

        while (position < Y) {
            position += D;
            jumps++;
        }

        return jumps;

    }


    //because own solution has very bad performance, searched for the Problem and tried out to implement the solution only with calculations
    function solution2(X: number, Y: number, D: number): number {

        let distance: number = Y - X;
        let jumps: number = 0;

        jumps = distance / D;

        if (distance % D == 0) {
            return jumps;
        }

        return Math.floor(jumps) + 1;

    }


}