// remove duplicate valules from array

 
function removeDuplicate(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(newArray.indexOf(arr[i])===-1){
            newArray.push(arr[i]);
        }
    }
    return newArray;
   }

   console.log(removeDuplicate([1,2,3,4,5,6,6,7,8,8]));