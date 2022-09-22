function checkSecondLow(arr){
    for(let i=0;i<arr.length;i++){
        arr.sort((a,b)=>{
            return a - b;
        });
    }
    return `${arr.slice(1,2)},${arr.slice(arr.length-2,arr.length-1)}`;
}
console.log(checkSecondLow([1,2,3,4,5]));