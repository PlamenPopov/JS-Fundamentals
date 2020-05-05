function solve(array) {
    let pattern=/U\$([A-Z][a-z]+)U\$P@\$(([a-zA-Z]+)[\d]+)P@\$/gm

    let count=array.shift();
    let num=Number(count[0]);
    let arr=array.slice(0,num);
    let counter=0;

    for (const mail of arr) {
        
        let validMail=Array.from(mail.matchAll(pattern))

        for (const arr of validMail) {
            let [username,passwordPart,password]=[arr[1],arr[3],arr[2]]

            if(username.length>=3 && passwordPart.length>=5){
                counter++;
                console.log('Registration was successful');
                console.log(`Username: ${username}, Password: ${password}`);    
            }else{
                console.log('Invalid username or password');   
            }
        }  
        
        let match=validMail.join('');

        if (!match.includes(mail)) {
            console.log("Invalid username or password");
        }
        
        
    }

    console.log(`Successful registrations: ${counter}`);
    

}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ])