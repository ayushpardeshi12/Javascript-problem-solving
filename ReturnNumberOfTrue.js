function HowMuch(arr){
    let newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]==true){
            newArr.push(arr[i]);
    }
}
return newArr.length;
}

console.log(HowMuch([true,true,false,true,false]));