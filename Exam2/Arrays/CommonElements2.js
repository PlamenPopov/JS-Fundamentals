function common(data=[],data2=[]) {
    
data.map((element)=>{
    if(data2.includes(element)){
        console.log(element);
        
    }
});

}

common(["Hey","hello",2,4,"Peter",'e'],["Petar",10,"hey",4,"hello",'2']);