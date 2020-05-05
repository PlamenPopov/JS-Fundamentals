function solve(input = []) {

  let arr = input
  .shift()
  .split(',')
  .map(Number)
  
  console.log(arr);
  

  for (let i = 0; i < input.length; i++) {
      let [command,firstNum,secondNum]
      =input[i].split(' ');

      firstNum=Number(firstNum);
      secondNum=Number(secondNum);

      switch (command) {
          case "Add":
              add(firstNum);
              break;
          case "Remove":
              remove(firstNum);
          break;
          case "RemoveAt":
              removeAt(firstNum);
              break;
          case "Insert":
           insert(firstNum,secondNum);
          break;

          default:
              break;
      }
      
  }

  function add(el) {
      arr.push(el)
  }

  function remove(num) {
      arr=arr.filter(el=>el!==num)
  }

  function removeAt(index) {
      arr.splice(index-1,1);
  }

  function insert(num,index) {
      arr.splice(index,0,num)
  }

  console.log(arr.join(' '));
  
}

solve(['4,19,2,53,6,43', 'Add 3', 'Remove 2', 'RemoveAt 2', 'Insert 8 3'])