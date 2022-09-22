function findStr(str){
    let array=str.match(/\w[a-z]{0,}/gi);
    array.sort((a,b)=>{
        return a.length-b.length;
    });
    return array.slice(array.length-1,array.length);
  }
  console.log(findStr("Web Development Tutorial"));