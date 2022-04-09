function largestSwap(num){
    let num1=parseFloat(num.toString().split('').reverse().join(''));

    console.log(num1);

    if(num>=num1){
        return true;
    }else{
        return false;
    }

    

    //toString will convert to array of characters for this num;
}

let b1=largestSwap(27);
console.log(b1);