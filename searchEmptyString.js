function regex(str){
    if(str.search(/ [ ]/g)){
        return true;
    }else{
        return false;
    }
   }
   console.log(regex(" "));