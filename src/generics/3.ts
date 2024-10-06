function merge<T, K>(objA: T, objB: K): T & K {
    return Object.assign({}, objA, objB);
  }
  
  const objA = { name: "Bob" };
  const objB = { age: 47 };
  
  const mergedObj = merge(objA, objB);
  console.log(mergedObj); // { name: 'Bob', age: 47 }
  
  
  