function name(params) {
    
    let string=params.map(String);
    console.log(string)
    let result=[];

    for (let index = 0; index < string.length; index++) {
        if(string[index]%2==0){
            result.push(string[index]);
        }
    }
    console.log (result.join(","));
}
name(["20","47"])