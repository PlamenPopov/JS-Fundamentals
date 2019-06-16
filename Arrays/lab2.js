
        function name(params) {
            let arr=params.map(Number);
            let result=[];
            for (let i = 0; i < params.length; i++) {
                if(params[i]<0){
                   result.unshift(params[i])
                }else{
                  result.push(params[i]);
                }
            }
            result.forEach(el=>console.log(el))
        }
        name([3,-2,0,-1])
  