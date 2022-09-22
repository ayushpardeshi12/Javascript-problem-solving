function checkPali(str){
    let len=str.length;

    for(let i=0;i<len/2;i++){
        if(str[i]!==str[len-1-i]){
            return "Not a palindrome";
        }
    }
    return 'its a palindrome';
}
console.log(checkPali("madam"));



// second prgram
function checkPali(str){
    let strReverse=str.split("").reverse().join("");
    if(str===strReverse){
        return "palindrome";
    }
    return 'Not a palindrome'
}
console.log(checkPali("hello"));