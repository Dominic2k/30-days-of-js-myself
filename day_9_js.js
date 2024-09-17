// a callback function, the name of the function could be any name
/*const callback = (n) => {
    return n ** 2;
}
*/
  // function that takes other function as a callback
/*function cube(callback, n) {
    return callback(n) * n;
}
console.log(cube(callback, 3));
console.log(callback(3));
*/


// Higher order function returning an other function
/*
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))
*/
/*

const createMultiplier = factor => {
    return number => {
      return number * factor;
    };
};
*/

// const double = createMultiplier(2);
// const triple = createMultiplier(3);
  
//console.log(createMultiplier(5)(2));  // Output: 10
//console.log(createMultiplier(5)(3));  // Output: 15

const numbers = [1, 2, 3, 4, 5];
const sumArray = arr => {
    let sum = 0;
    // const callback = (element) => {
    //     sum += element;
    // }
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
console.log(sumArray(numbers));