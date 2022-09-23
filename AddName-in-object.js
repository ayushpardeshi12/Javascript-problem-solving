function AddName(obj,petName,value){
    obj[petName]=value;
    return obj;
 }
 console.log(AddName({},"Brutus",300));