function amplify(num){
    let arr=[];
    for(let i=0;i<=num;i++){
        if(i%4===0){
            arr.push(i*10);
        }else{
            arr.push(i);
        }
    }
    return arr;
}

console.log(amplify(25));