function error(n){
    return {
        1:"check",
        2:"Emergency",
        3:"Pump",
        4:"c",
        5:"Temp"
    }[n]||101;
  }
  console.log(error(3))