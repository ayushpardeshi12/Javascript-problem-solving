// sort Numbers in decending order

function sortNum(Num){
    const newNum= Num.toString(10).split("").sort((a,b)=>{
        return b - a;
    }).join("");
    return newNum;
}

console.log(sortNum(763054));