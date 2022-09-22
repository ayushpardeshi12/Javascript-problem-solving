function OmniPresent(arr,num){
    let array=[];
    for(let i=0;i<arr.length;i++){
        let innerArr=arr[i];
        for(let j=0;j<innerArr.length;i++){
            if(innerArr[j]==num){
                array.push(innerArr[j]);
            }else{
                return false;
            }
        }
        if(array.length==arr.length){
            return `${num} is OmniPresent`;
        }
    }
    return array;
   }
   console.log(OmniPresent([[1,2],[2,1],[3,1]],1));