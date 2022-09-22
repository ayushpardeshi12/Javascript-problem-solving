function longestStr(arr){
    let str=arr.slice(0,1);
    let midChar=arr.slice(1,arr.length);
    let onepluschar= String.fromCharCode(1+str.charCodeAt());
    return onepluschar+midChar;
   }

   console.log(longestStr("string"));