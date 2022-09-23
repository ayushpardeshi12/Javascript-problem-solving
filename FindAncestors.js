function findAncestors(num,g){
    if(num===0){
        return "Me!";
    }else if(num==1 && g=="m"){
        return "Son";
    }
}
console.log(findAncestors(0,"m"));