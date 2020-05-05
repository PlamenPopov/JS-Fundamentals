function solve(city,area,population,country,postCode) {
    
    let info={
        city,
        area,
        population,
        country,
        postCode,
    };

    for (const key in info) {
        
        console.log(` ${key}->${info[key]}`);
        
    }
}

solve('Sofia','492','1234563','Bulgaria','1000')