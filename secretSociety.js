function SecretSociety(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        arr1.push(arr[i][0].split(",").join(""));
    }
    return arr1;
 }

 console.log(SecretSociety(["Adam","Sarah","Malcolm"]));