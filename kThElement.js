function kthElement(arr,num){
    let sortArr=arr.sort((a,b)=>{
        return a - b;
    });
    return sortArr[num-1];
 }
 console.log(kthElement([5,2,1,4,6],3));