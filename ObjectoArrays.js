function object(obj){
    return [Object.keys(obj), Object.values(obj)];
   }
   console.log(object({a:1,b:2}));