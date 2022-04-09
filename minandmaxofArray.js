function minMax(arr){
    let num1=Math.min(...arr);
    let num2=Math.max(...arr);

    let num3=[num1,num2];       
    return num3;
}

console.log(minMax([1]));

const arr=["abc","def"];        //just arr and then, arr=[1,2,3];


console.log(arr);