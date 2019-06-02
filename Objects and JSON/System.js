function solve(input) {
    let mainSys=new Map();

    for (let i = 0; i < input.length; i++) {
        
        let [system,component,subComponent]=input[i].split(" | ");
        if(!mainSys.has(system)){
            mainSys.set(system,new Map());
        }
        if(!mainSys.get(system).get(component)){
            mainSys.get(system).set(component,[])
        }
        mainSys.get(system).get(component).push(subComponent);
    }

    let sortSys=Array.from(mainSys.keys()).sort()
        .sort(((a,b)=>
            mainSys.get(b).size - mainSys.get(a).size
        ));
     for (const sys of sortSys) {
         console.log(sys)
         let sortComp=Array.from(mainSys.get(sys).keys())
         .sort((a,b)=>mainSys.get(sys).get(b).length - mainSys.get(sys).get(a).length);
         for (const comp of sortComp) {
             console.log(`|||${comp}`)
             for (const sub of mainSys.get(sys).get(comp)) {
                console.log(`||||||${sub}`)
            }
         }
     }    
     console.log(mainSys.length)
}

solve(['SULS | Main Site | Home Page',
       'SULS | Main Site | Login Page',
       'SULS | Main Site | Register Page',
       'SULS | Judge Site | Login Page',
       'SULS | Judge Site | Submittion Page',
       'Lambda | CoreA | A23',
       'SULS | Digital Site | Login Page',
       'Lambda | CoreB | B24',
       'Lambda | CoreA | A24',
       'Lambda | CoreA | A25',
       'Lambda | CoreC | C4',
       'Indice | Session | Default Storage',
       'Indice | Session | Default Security']);