function solve(input){
    
    let number=input[0];

    for (let i = 1; i <input.length; i++) {
        if(input[i]=="chop"){
            number/=2;
        }else if(input[i]=="dice"){
           number=Math.sqrt(number)
        }else if(input[i]=="spice"){
            number+=1;
        }else if(input[i]=="bake"){
            number*=3;
        }else if(input[i]=="fillet"){
            number-=(number/10)*2;
        }
        console.log(number)
    }


}

solve(['9','dice','spice','chop','bake','fillet'])