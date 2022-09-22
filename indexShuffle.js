function indexShuffle(str){
    let new1="";
    let new2="";
    for(let i=0;i<str.length;i++){
        if(i%2===0){
            new1+=str[i];
        }else{
            new2+=str[i];
        }
    }
    return new1.concat(new2);
}
console.log(indexShuffle("abcdefg"));