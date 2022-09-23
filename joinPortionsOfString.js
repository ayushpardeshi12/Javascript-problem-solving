// join differnet portions of path

function joinPortions(str1,str2){
    if(str1.match("/")|| str2.match("/")){
        str1=str1.replace("/","");
        str2=str2.replace("/","");
    }
    return str1+"/"+str2;
 }  
 console.log(joinPortions("portion1/","portion2/"));