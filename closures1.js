function redundant(name){
    return function(){
        return name;
    }
}

const redundan=redundant("Apple");
console.log(redundan());