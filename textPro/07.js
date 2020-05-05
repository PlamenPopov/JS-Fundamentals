function solve(string) {
    let currIndex=-1;
    let output=[];
   
    for (let i = 0; i < string.length; i++) {
        let letter=string[i];
        if (letter.toLowerCase()!==letter && i!==0) {
            let word=string.substring(currIndex,i);
            currIndex=i; 
            output.push(word)
        }
    }

    output.push(string.substring(currIndex));
    console.log(output.join(', '));
    
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')