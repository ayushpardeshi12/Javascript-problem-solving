// replace all characters of string by their forwarding character 

function replaceStr(str){
    let newstr="";
    for(let i=0;i<str.length;i++){
        newstr+=(String.fromCharCode(1 + str[i].charCodeAt(0)));
    }
    return newstr;
}

console.log(replaceStr("string"));