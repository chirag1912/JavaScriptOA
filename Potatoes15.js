function potatoes(){
    let str="potatopotato";
    let count=str.split('potato').length-1;
    console.log(count);
    return count;
}

console.log(potatoes());