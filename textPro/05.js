function solve(string) {

    function isValid(arr) {
    arr=string.split('');
    let output=[]
    for (let i = 0; i < arr.length; i++) {  
        if(arr[i]!==arr[i+1]){
            output.push(arr[i])
        }
    }
    return output.join('')
}
    console.log(isValid(string));   
}

solve(
'aaaaabbbbbbbbcccccccdddeeeeaaaa'
)