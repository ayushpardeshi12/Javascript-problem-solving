function variableArrays(...arr){
    let arr1= arr.toString(10).split(",").join("");
    let newArr=[];
    for(let i=0;i<arr1.length;i++){
        newArr.push(parseInt(arr1[i]));
    }
    return newArr;
   }
   console.log(variableArrays([1,2],[3,4]));

   // use destructuring