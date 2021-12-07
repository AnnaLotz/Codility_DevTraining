namespace L01_Iterations {

    solution(647);

    function solution(_n: number): number {

        if (_n <= 0)
            return 0;

        let binary: number = parseInt(_n.toString(2));
        console.log("number: " + _n);
        console.log("binary: " + binary);
        let regex: RegExp = new RegExp("((?<=1))0.*?((?=1))");
        //regex.test(binary.toString());
        //regex.exec(binary.toString());

        let result: RegExpExecArray | null = regex.exec(binary.toString());
        console.log(result);
        if (result) {
            //console.log(result.index);

            console.log(result.entries);
            console.log(result[0].length);
        }

        return 0;

    }

    /*
    function solutionOLD(_n: number): number {

        if (_n <= 0)
            return 0;

        interface BinaryGap {
            isOpened: boolean;
            isClosed: boolean;
            count: number;
        }
        let binaryGap: BinaryGap = { isOpened: false, isClosed: false, count: 0 };
        let binaryGaps: BinaryGap[] = [];

        let binary: number = parseInt(_n.toString(2));
        console.log("number: " + _n);
        console.log("binary: " + binary);

        let splitted: string[] = _n.toString(2).split("");
        console.log(splitted);

        for (let element of splitted) {
            console.log(element);
            if (element == "1" && !binaryGap.isOpened) {            
                binaryGap.isOpened = true;
            } else if (element == "1" && binaryGap.isOpened) {
                binaryGap.isClosed = true;
                binaryGaps.push(binaryGap);
                break;
            }
            else if (element == "0" && binaryGap.isOpened)
                binaryGap.count++;
        }

        console.log(binaryGap);


        //if (splitted[splitted.length - 1] == "" && splitted[0] == "")
        //   console.log("in");
        //splitted.sort();


        //console.log(splitted[splitted.length - 1].length);

        return 0;
    }
    */
}