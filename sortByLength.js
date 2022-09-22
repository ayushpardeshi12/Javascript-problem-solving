function sortByLength(arr){
    let ArrayNew=[];
        ArrayNew.push(arr.sort((a,b)=>{
            return a.length-b.length;
        }));
        return ArrayNew;
    }

console.log(sortByLength(["Google","Microsoft","Apple"]));