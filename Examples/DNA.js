function solve(input) {

    
let entries={};
let pattern=/([a-z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)/gm;

for (let l of input) {
    if(l=="Stop!"){
        break;
    }
    let matches=l.match(pattern);
    if(matches){
        let name=matches[0].replace(/([^a-z0-9]+)/gi,"")
        console.log(name)
    }
}


}

solve(
["!@ab?si?di!a@=7--152<<human",
"b!etu?la@=6--321<<dog",
"!curtob@acter##ium$=14--230<<dog",
"!some@thin@g##=9<<human",
"Stop!"]
)