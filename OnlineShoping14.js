function freeShopping(order){

    let sum=0;
    for(let i=0;i<order.length;i++){
        sum+=order[i];
    }
    
    if(sum>50){
        return true;
    }else{
        return false;
    }
}

console.log(freeShopping([1,2,3,4,5]));
