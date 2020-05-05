function solve(string) {

    let lastIndex=string.lastIndexOf("\\");
    let text=string.substring(lastIndex+1);

    let tokens=text.split('.');

    console.log(`File name: ${tokens[0]}`);
    console.log(`File extension: ${tokens[1]}`);   
       
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs');