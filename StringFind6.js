function detectWord(){
    
    let str="ABCGtutuuGJGyoijiGHJGJ";

    let res="";

    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase() === str[i]){
            res+=str[i];
        }
    }

    console.log(res);
}

detectWord();