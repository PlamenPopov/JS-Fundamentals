function solve(input) {
    let data={};
    let model;
    let pilot;
    let points;
    for (const obj of input) {
        let split=obj.split(" -> ");
         model=split[0];
         pilot=split[1];
         points=+split[2];
        
        if(!data.hasOwnProperty(model)){
            data[model]={};
        }

        if(!data[model].hasOwnProperty(pilot)){
            data[model][pilot]=points;
        }

        
        
    }
    
    let o= Object.values(data)[1] ;
    console.log(o)

          
    
}
solve(
    ["Ferrari -> Kimi Raikonnen -> 25",
"Ferrari -> Sebastian Vettel -> 18",
"Mercedes -> Lewis Hamilton -> 10",
"Mercedes -> Valteri Bottas -> 8",
"Red Bull -> Max Verstapen -> 6",
"Red Bull -> Daniel Ricciardo -> 4"]
)