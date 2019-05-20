function solve(input){
    let speed=input[0];
    let area=input[1];

let limit=AreaLimit(area);

if(speed >limit){
    let over=speed-limit;
    console.log(over)
    if(over<=20){
        console.log("speeding")
    }else if(over>20 && over<=40){
        console.log("excessive speeding")
    }else if(over>40){
        console.log('reckless driving')
    }
}else{
    return;
}

 function AreaLimit(zone){
    let speedLimit='';

    if(area==="motorway"){
        speedLimit=130;
    }else if(area==="interstate"){
        speedLimit=90;
    }else if(area==="city"){
        speedLimit=50;
    }else if(area==="residential"){
        speedLimit=20;
    }

    return speedLimit;
}



}

solve(["120","interstate"]);