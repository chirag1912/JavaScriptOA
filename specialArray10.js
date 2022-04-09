function isspecialArray(arr){
    let res;
    for(let i=0;i<arr.length;i++){
        if(i%2==0 && arr[i]%2!=0){
            return false;
        }else if(i%2!=0 && arr[i]%2==0){
            return false;
        }
    }
    return true;
}

console.log(isspecialArray([2,3,3,5]));