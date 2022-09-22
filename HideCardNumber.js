function cardNumber(num){
    let string="";
        for(let i=0;i<num.length-4;i++){
            string+="*"
        }
        num=num.slice(num.length-4,num.length);
        return string.concat(num);
   }
   console.log(cardNumber("1234123456785678"));