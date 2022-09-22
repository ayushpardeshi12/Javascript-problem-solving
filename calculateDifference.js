function calcDifference(obj,limit){
    let result=0;
  for(let user in obj){
    result+=obj[user];
  }
    return result-limit;
  }

  console.log(calcDifference({skate:10,painting:20},19));