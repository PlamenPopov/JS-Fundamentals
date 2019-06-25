function solve(input, gas) {
  let matrix = input.map(row => row.split(" ").map(Number));

  let index = gas.map(g => g.split(" "));

  for (let i = 0; i < index.length; i++) {
    let str = index[i][0];
    let count = index[i][1];
    if (str === "breeze") {
      let matrixRow = matrix[count];
      for (let i = 0; i < matrixRow.length; i++) {
        matrixRow[i] = Math.max(0, matrixRow[i] - 15);
      }
    }

    if (str === "gale") {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][count] = Math.max(0, matrix[i][count] - 20);
      }
    }

    if (str === "smog") {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = Math.max(0, matrix[i][j] + 25);
        }
      }
    }

    
  }

  let dangerAreas=[];
  matrix.forEach((row,i) => {
          row.forEach((el,j)=>{
                  if(el>=50){
                          dangerAreas.push(`[${i}-${j}]`)
                  }
          })
  });
  console.log(dangerAreas.join(", "));
}

solve(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
