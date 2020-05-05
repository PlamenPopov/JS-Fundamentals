function solve(arr=[]) {

    let mapHood=new Map();
    let hoods=arr.shift();
    let hood=hoods.split(', ');

    for (const el of hood) {
        mapHood.set(el,[])
    }

        for (let i = 0; i < arr.length; i++) {
            
         let [hoodName,friendName]=arr[i].split(' - ')
                
         if(hood.includes(hoodName)){
          mapHood.get(hoodName).push(friendName);
                                            
         }     
    }

        let temp=Array.from(mapHood.entries());

        temp.sort((a,b)=>{
            return b[1].length - a[1].length;
        })

        let result=new Map(temp);

        for (const [i,j] of result) {
            console.log(`${i} : ${j.length}`)

            j.forEach(element => {
                console.log(`--${element}`)
            });
        }    
}

solve(['Abbey Street, Herald Street, Bright Mews','Bright Mews - Garry','Bright Mews - Andrea','Invalid Street - Tommy','Abbey Street - Billy']);