function solve(firstName,secondName,age){

    let hero={
        nameFirst:firstName,
        nameSecond:secondName,
        heroAge:age,
    }

    for (const key in hero) {
       
        console.log(` ${key}:${hero[key]}`)
    }
    
}

solve('Peter','Pan',20)