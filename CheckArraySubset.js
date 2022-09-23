// check whether array1 is subset of array2 or not 

function ArraySubset(arr1,arr2){
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr2[i]==arr1[j]){
                return true;
            }else{
                return false;
            }
        }
    }
}

console.log(ArraySubset([1,2],[1,2,3,4,5]));