function addingNumbers(str){
    let arr=[];
    let newString=str.toString(10).split(",").join("");
    for(let i=0; i<newString.length; i++){
        arr.push(newString[i]);
    }
    let reduced=arr.reduce((a,b)=>{
        return parseInt(a) + parseInt(b) ;
    });

    return reduced;
  }
  console.log(addingNumbers("1,2,3,4,5"));