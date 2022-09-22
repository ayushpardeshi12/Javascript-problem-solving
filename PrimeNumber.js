function isPrime(num){
    let flag=true;
    if(num<=1){
        return 'prime number is not composite'
    }
    else if(num>1){
        for(let i=2;i<num;i++){
            if(num%i==0){
                flag=false;
                return `${num} is not a prime number`;
            }
        }
        if(flag){
            return `${num} is prime`;
        }else{
            return `${num} is not prime`;
        }
    }
    else{
        return 'Not Prime';
    }
}

console.log(isPrime(7))