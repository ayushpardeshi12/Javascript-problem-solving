function chatRoom(arr){
    if(arr.length==0){
        return 'No One Online';
    }else if(arr.length>0){
        return `${arr[0]}, ${arr[1]} and ${arr.slice(2,arr.length).length} More Online`
    }
   }
   console.log(chatRoom(["Ayush","vidhi","nikita"]));