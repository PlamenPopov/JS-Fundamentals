function common(data=[],data2=[]) {
    
for (let i = 0; i < data.length; i++) {
       for (let j = 0; j < data2.length; j++) {
        if(data[i]===data2[j]){
            console.log(data[i])
        }
       }
}

}

common(["Hey","hello",2,4,"Peter",'e'],["Petar",10,"hey",4,"hello",'2']);