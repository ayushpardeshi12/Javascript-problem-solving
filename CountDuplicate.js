function unique(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
   }
   console.log(unique([1,2,2,2,3,4,5,6]));

   // replace the duplicate elements
   function unique(arr,num){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])===1){
            newArr.push(num);
        }else if(newArr.indexOf(arr[i])==-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
   }
   console.log(unique([1,2,2,2,3,4,5,6],5));