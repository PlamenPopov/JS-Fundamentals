function solve(params) {
    
    let arr=[];
    let number=1;
    

    let add=()=>{
        arr.push(number);
        number++;
    }

    let remove=(m)=>{
        arr.pop();
        number++;
    }

    for (let index = 0; index < params.length; index++) {
        
        let command=params[index];
        if(command==="add"){
           add()
        }else if(command==="remove"){
           remove(index);
        }
    }

    if(arr.length===0){
        console.log("Empty")
    }else{
        arr.forEach((m)=>{
            console.log(m)
       })
    }
}

solve(["add","add","remove","add"])