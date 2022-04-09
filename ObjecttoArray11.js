function toArray(obj){

    Object.values(obj);
    Object.keys(obj);

    Object.entries(obj);
    console.log(Object.entries(obj));

    return Object.entries(obj);
}

const numbers = {
    one: 1,
    two: 2
  }
toArray(numbers);