function obj(str){
    let array=[];
        for(let index in str){
            array.push(str[index]);
        }
        array.sort((a,b)=>{
            return a - b;
        });

        return array[0];
  }
  console.log(obj({"cyan":432,"magenta":543,"yellow":777}));