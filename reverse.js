//reverse the string


// function reverseStr(str){
//     let reverseString="";
//     for(let i=str.length-1;i>=0;i--){
//         reverseString+=str[i];
//     }
//     return reverseString;
// }

// console.log(reverseStr("string"));

function reverseStr(str){
    return str.split("").reverse().join("");
}

console.log(reverseStr("string"));