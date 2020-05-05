function solve(data) {

    let result=[];

    for (let i = 0; i <data.length; i++) {
        if(data[i]==='add') {
           result.push(i+1);
        }
        if(data[i]==='remove'){
            result.splice(result.length-1,1);
        }   
    }

    if(result.length===0){
        console.log("Empty");
    }else
        console.log(result.join(' '))
    ;


    
}

solve(['remove','add','add','remove','add']);