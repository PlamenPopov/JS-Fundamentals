function solve(input){
    
    let number=+input[0];
    
    let chop=()=>number/2;
    let dice=()=>Math.sqrt(number);
    let spice=()=>number+1;
    let bake=()=>number*3;
    let fillet=()=>number*0.8;


    for (let i = 1; i <input.length; i++) {
        if(input[i]=="chop"){
            number=chop();
        }else if(input[i]=="dice"){
           number=dice()
        }else if(input[i]=="spice"){
            number=spice()
        }else if(input[i]=="bake"){
           number=bake()
        }else if(input[i]=="fillet"){
            number=fillet()
        }
        console.log(number)
    }

   


}

solve(['32','chop','chop','chop','chop','chop'])