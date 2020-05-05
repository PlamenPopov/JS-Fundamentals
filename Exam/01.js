function solve(array=[]) {
    
    let mail=array.shift();


    for (const line of array) {
        if(line==='Make Upper'){
          mail=mail.toUpperCase();
          console.log(mail);  
        }else if(line==='Make Lower'){
            mail=mail.toLowerCase();
            console.log(mail);
        }else if(line.includes('GetDomain')){
            let tokkens=line.split(' ');
            let index=mail.indexOf('.');
            let domain=mail.slice(index+1);
            console.log(domain);  
        }else if(line==='GetUsername'){
            if(mail.includes('@')){
               let index=mail.indexOf('@');
               let username=mail.slice(0,index);
               console.log(username);
               
            }else{
                console.log(`The email ${mail} doesn't contain the @ simbol.`);
            }
        }else if(line.includes('Replace')){
            let tokens=line.split(' ');
            let symbol=tokens[1];
            
            for (const l of mail) {
                if(l===symbol){
                   mail=mail.replace(symbol,'-')
                }
            }
            console.log(mail);    
        }else if(line==='Encrypt'){
         let result=mail.split('').map((x)=>{
            return x.charCodeAt(0)
         }).join(' ');
         console.log(result);
        }else{
            break;
        }
    }

    
}

solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
  ]
  );