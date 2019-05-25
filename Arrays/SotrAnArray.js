function solve(input) {

    input.sort((a,b)=>SortByLength(a,b)).forEach(element => {
        console.log(element);
    });
    
    function SortByLength(a,b){
        return  a.length-b.length || SortByName(a,b);
    }

    function SortByName(a,b){
        return  a.toLowerCase().localeCompare(b.toLowerCase());
    }
}

solve(["test","Deny","omen","Default"])