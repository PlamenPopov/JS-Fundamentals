function solve(data=[]){

function isPolindrome(text) {
    let len=text.length;
    let isPoliVal=true;

    for (let i = 0; i < Math.floor(len/2); i++) {
        if(text[i] !== text[len-1-i]) {
            isPoliVal=false;
            break;
        }       
    }

    return isPoliVal;
}

for (const num of data) {
    console.log(isPolindrome(num.toString()));
}

}

solve([123,323,421,121]);
