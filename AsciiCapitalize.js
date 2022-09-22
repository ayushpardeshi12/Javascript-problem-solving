function asciiCapitalize(str){
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)%2==0){
            newStr+=str[i].toUpperCase();
        }else{
            newStr+=str[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(asciiCapitalize("to be or not to be !"));