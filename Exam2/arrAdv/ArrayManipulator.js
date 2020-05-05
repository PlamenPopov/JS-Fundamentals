function solve(arr = [], commands = []) {

    for (let i = 0; i = commands.length; i++) {

        let commandString = commands.shift();
        let parts = commandString.split(' ');
        let command = parts.shift();

        if (command === 'print') {
            console.log(`[ ${arr.join(', ') } ]`);
            break;
        } else {

            function add(index, number) {
                arr.splice(index, 0, number)
                return arr;
            }

            function addMany(index, array) {

                for (const element of array) {
                    arr.splice(index++, 0, element)
                }
                return arr;
            }

            function remove(num) {
                arr.splice(num, 1)
            }

            function shift(num) {
                for (let i = 0; i < num; i++) {
                    let shiftEl = arr.shift();
                    arr.push(shiftEl);
                }
            }

            function sumPairs(array) {

                let sum = [];
                while (array.length>0) {
                    let a=array.shift() || 0;
                    let b=array.shift() || 0;
                    sum.push(a+b);
                }
                return sum;
            }


            switch (command) {
                case 'add':
                    add(parts[0], Number(parts[1]))
                    break;
                case 'addMany':
                    addMany(parts.shift(), parts)
                    break;
                case 'contains':
                    console.log(arr.indexOf(Number(parts[0])));
                    break;
                case 'remove':
                    remove(parts[0])
                    break;
                case 'shift':
                    shift(parts[0])
                    break;
                case 'sumPairs':
                   arr= sumPairs(arr)
                    break;



                default:
                    break;
            }


        }
    }
}

solve([1, 2, 4, 5, 6, 7],
    ['sumPairs', 'contains 1', 'contains 3', 'print'])