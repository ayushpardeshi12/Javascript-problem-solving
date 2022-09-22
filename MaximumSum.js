function unique(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
            newArr.push(arr[i]-arr[i+1]);
    }
    let Sliced=newArr.slice(0,newArr.length-1);
    return Sliced.slice(Sliced.length-1,Sliced.length);

}
console.log(unique([1,2,3,4,5,5,6,7]))