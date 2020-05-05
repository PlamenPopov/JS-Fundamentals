function solve(arr = []) {
    let map = new Map();
    let searchinWords = arr.shift().split(' ');

    for (const word of searchinWords) {
        map.set(word, [])
    }

    for (const string of arr) {

        if (map.has(string)) {
            map.set(string, map.get(string).concat('ok'))
        }
    }

    let temp = Array.from(map).sort((a, b) => {
        return b[1].length - a[1].length;
    })

    for (const i of temp) {
        console.log(`${i[0]} - ${i[1].length}`);

    }




}

solve([
    'this sentence',
    'In', 'this',
    'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])