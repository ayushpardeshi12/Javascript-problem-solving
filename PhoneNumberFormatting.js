function formatting(arr){
    let arr1=arr.slice(0,3).toString(10).split(",").join("");
    let midArr=arr.slice(3,6).toString(10).split(",").join("");
    let arr3=arr.slice(6,arr.length).toString(10).split(",").join("");

    return `(${arr1})-${midArr}-${arr3}`;
}
console.log(formatting([1,2,3,4,5,6,6,4,9,2]))