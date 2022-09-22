// sum of absolute Difference between array

function unique(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
            newArr.push(arr[i+1]-arr[i]);
    }
    let Sliced=newArr.slice(0,newArr.length-1);
    let reducedArr=Sliced.reduce((accumulator,currentValue)=>{
        return Math.abs(accumulator) + Math.abs(currentValue);
    });
    return reducedArr;       
}
console.log(unique([1,2,3,4,5,5,6,7]))