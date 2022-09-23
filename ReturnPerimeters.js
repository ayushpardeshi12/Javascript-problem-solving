function Perimeters(letter,number){
    if(letter==="s"||"S"){
        return 4 * number;
    }else if(letter==="c"||"C"){
        return 2 * 3.14 * number;
    }
}

console.log(Perimeters("s",12));