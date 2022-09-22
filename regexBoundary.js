function regexFind(str){
    if(str.includes(".js"||".jsx")){
        return "A jsx File";
    }else{
        return false;
    }
}
console.log(regexFind("/user/users.js"));