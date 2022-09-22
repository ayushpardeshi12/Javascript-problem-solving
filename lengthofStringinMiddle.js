function midStr(str){
    let str1;
    for(let i=0;i<str.length;i++){
        if(str[i].length%2!=0){
            return str1=str.slice(str.length/2-1,str.length/2+2);
        }
    }
return str1;
}
console.log(midStr("stringgffas"));