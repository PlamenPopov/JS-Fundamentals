function solve(word,string) {

    let text=string.toLowerCase().split(' ');
    if(text.includes(word)){
        console.log(word);   
    }else{
        console.log(`${word} not found!`);
        
    }
}

solve('javascript',
'JavaScript is the best programming language'
)