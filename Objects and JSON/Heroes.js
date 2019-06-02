function solve(input) {
    
  let heroes=[];

  let data=input.map((hero)=>{
      return hero
    }).forEach(el => {
        let elements=el.split("/");
        let name=elements[0];
        let level=+elements[1];
        let weapons=[];
        if(elements.length>2){
             weapons=elements[2].split(", ");
        }
        
 hero={
       name:name,
       level:level,
       weapons:weapons
};
     heroes.push(hero);

});
console.log(JSON.stringify(heroes));
    

}

solve(["Isco/25/Apple, GravityGun","Dancho/12/Barrelvest, DestructionSword","Popov/40/Botlle, Glass"]);