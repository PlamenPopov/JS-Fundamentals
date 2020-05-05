function solve(string) {

    let map=new Map();

    let words=string.split(" ")

    for (const i of words) {
        let word=i.toLowerCase();

        if(!map.has(word)){
            map.set(word,[]);
            map.set(word,map.get(word).concat('yes'));
        }else{
            map.set(word,map.get(word).concat('yes'));
        }
    }

    let result=[];
    let temp=Array.from(map);

    for (const i of temp) {      
        if(i[1].length%2!==0){
            result.push(i[0]);   
        }   
    };

    console.log(result.join(' '));
    
    
    

      
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

