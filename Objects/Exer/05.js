function solve(arr=[]) {

    let heroes=[];

    while (arr.length>0) {
        let line=arr.shift().split('/');

        let hero={
            name:line[0],
            level:Number(line[1]),
            items:line[2]
            .split(', ')
            .sort((a,b) =>a.localeCompare(b))
            .join(', ')
        }
        
        heroes.push(hero) ;
    }

    heroes.sort((a,b) => a.level - b.level);

    let output=[];

    for (const hero of heroes) {
       let str=`Hero: ${hero.name}\nLevel => ${hero.level}\nitems => ${hero.items}`;
       output.push(str);
    }

    return output.join('\n');

    
    
}

console.log(

solve(['Isacc/25/Apple, GravityGun','Derek/12/BarrelWest, DestructionSword','Hes/1/Desolator, Sentinel, Antara']))