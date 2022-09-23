function possibleBonus(p1,p2){
    for(let i=1;i<=6;i++){
        p1+=1;
        if(p1===p2){
            return true;
        }
    }
    return false;
  }

  console.log(possibleBonus(3,7));