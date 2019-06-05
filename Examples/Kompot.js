function solve(input) {
   
    let peachKg=0;
    let cherryKg=0;
    let plumKg=0;
    let rakiaFruidsKg=0;


for (const line of input) {
    let split=line.split(/\s+/g);
    let fruit=split[0];
    let kg=+split[1];

    if(fruit=="peach"){
        peachKg+=kg;
    }else if(fruit=="cherry"){
        cherryKg+=kg;
    }else if(fruit=="plum"){
        plumKg+=kg;
    }else if(fruit!="peach" || fruit!="cherry" || fruit!="plum"){
        rakiaFruidsKg+=kg;
    }
   
}

let peachCount=2.5*140;
let peachKompot=Math.floor((peachKg*1000)/peachCount);

let plumCount=10*20;
let plumKompot=Math.floor((plumKg*1000)/plumCount);

let cherryCount=25*9;
let cherryKompot=Math.floor((cherryKg*1000)/cherryCount);

let rakia=rakiaFruidsKg/5;

console.log(`Cherry kompots: ${cherryKompot}\nPeach kompots: ${peachKompot}\nPlum kompots: ${plumKompot}\nRakiya liters: ${rakia.toFixed(2)}                            `)

}

solve(
    [   'apple 6',
        'peach 25.158',
        'strawberry 0.200',
        'peach 0.1',
        'banana 1.55',
        'cherry 20.5',
        'banana 16.8',
        'grapes 205.65'
        ,'watermelon 20.54'
    ]
)