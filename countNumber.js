function countNum(num){
    num=num.toString(10);
    let arr=[];
    for(let i=0;i<num.length;i++){
        arr.push(num[i]);
    }
    return arr.length;
  }
  console.log(countNum(12));