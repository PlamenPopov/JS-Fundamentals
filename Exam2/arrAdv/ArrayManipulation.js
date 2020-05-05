function solve(input = []) {

    let numbers = input.shift();
    let numArr = numbers.split(',');
    let params;
    let comand;
    let count;
    let overCount;

    for (let i = 0; i < input.length; i++) {
        params = input[i].split(' ');
        comand = params[0];
        count = params[1];
        if (params.length > 2) {
            overCount = params[2]
        }

        if (comand === 'Add') {
            numArr.push(count);
        }
        if (comand === "Remove") {
            for (let i = 0; i < numArr.length; i++) {
                if (numArr[i] === count) {
                    numArr.splice(i, 1);
                    break;
                }
            }
        
        }
        if (comand === 'RemoveAt') {
            numArr.splice(count - 1, 1);
        
        }
        if (comand === 'Insert') {
            numArr.splice(overCount, 0, count);
        
        }
    }

    console.log(numArr.join(' '));
}

solve(['4,19,2,53,6,43', 'Add 3', 'Remove 2', 'RemoveAt 2', 'Insert 8 3'])