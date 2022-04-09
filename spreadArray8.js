

function tuckArray(){

    let arr1=[1,2,3,4,5];
    let arr2=[10,20];

    let mid=Math.floor(arr1.length/2);

    console.log(mid);
    arr1.splice(mid,0,...arr2);

    console.log(arr1);
    return arr1;
}

tuckArray();