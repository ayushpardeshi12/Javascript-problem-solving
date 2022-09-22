function MaxTotal(sum){
    let sumStr=sum.slice(sum.length-2,sum.length);
        sumStr=parseInt(sumStr);
    let sum1=parseInt(sum);
        minutes=sum1*60;
        if(sumStr==60){
            return false;
        }
        return minutes + sumStr;
  }
  console.log(MaxTotal("13:56"));