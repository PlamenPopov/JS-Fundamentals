function solve(key,text) {

let words=key.split(', ').sort((a,b)=>b.length-a.length);

for (const word of words) {
    text=text.replace('*'.repeat(word.length),word)
}

return text;
}

console.log(solve('great, new',

'softuni is ***** place for learning *** programming languages'))