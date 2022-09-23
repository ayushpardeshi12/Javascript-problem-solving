function spellRep(str){
    let arr=[];
    let newStr="";
    for(let i=0;i<str.length;i++){
          newStr+=str[i];
          arr.push(newStr);
     }
     return arr;
    }

  console.log(spellRep("bee"));