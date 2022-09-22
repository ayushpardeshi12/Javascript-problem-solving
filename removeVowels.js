function removeVowels(str){
    return str.split("").filter(char=>'aeiou'.indexOf(char)<0).join("");
   }
   console.log(removeVowels("strings"));