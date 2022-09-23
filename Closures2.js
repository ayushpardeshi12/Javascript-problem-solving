function FunctionFact(n){
    return function(){
        return n + 5;
    }
   }
   const fact=FunctionFact(2);
   console.log(fact());