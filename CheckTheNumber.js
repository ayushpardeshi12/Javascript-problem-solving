function Count(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let innerArr=arr[i];
        for(let j=i;j<innerArr.length;j++){
            if(arr[i][j]===1){
                 newArr.push(arr[i][j]);
            }
        }
    }
    return newArr.length;
}

console.log(Count([[1,1,1],[1,7],[2,3],[4,1,5]]));