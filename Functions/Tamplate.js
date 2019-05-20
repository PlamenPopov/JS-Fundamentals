function solve(input){
  let question=input[0];
  let answer=input[1];

  console.log(
      `<?xml version="1.0" encoding="UTF-8"?>
      <quiz>
      <question>
      ${question}
      </question>
      <answer>
      ${answer}
      </answer>
      </quiz>
      `
  );

}

solve(["Who?","Me"])