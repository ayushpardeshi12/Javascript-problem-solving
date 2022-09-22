function ArrayOperation(x,y,n){
    let arr=[];
    for(let i=x;i<=y;i++){
        if(i%n===0){
             arr.push(i);
        }else{
            [];
        }
    }
    return arr;
}
console.log(ArrayOperation(1,100,3));