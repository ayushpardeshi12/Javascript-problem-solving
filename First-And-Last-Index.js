// Find the First index and last Index of the occurence of string

function FindIndex(str,char){
    let charIndex=[];
    for(let i=0;i<str.length;i++){
        if(str[i]===char){
            charIndex.push(i);
        }
    }
    return `${charIndex[0]},${charIndex.slice(charIndex.length-1,charIndex.length)}`;
 }
 console.log(FindIndex("circumlocution","c"));