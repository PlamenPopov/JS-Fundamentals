function solve(input) {
    let users=new Set();

 

    input.forEach(username => {
        users.add(username)
    });
    
    let kids=Array.from(users)
    .sort((a,b)=>a.length-b.length || a.localeCompare(b));

    kids.map((kid)=>console.log(kid));
}

solve(
    ['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);