function solve(string) {
    let text=string.split('').reverse();

    let a=text.splice(text.length/2);
    console.log(a.join(''));
    console.log(text.join(''));

    
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')