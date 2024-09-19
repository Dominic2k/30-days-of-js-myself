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

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = arr => {
//     let sum = 0;
//     // const callback = (element) => {
//     //     sum += element;
//     // }
//     arr.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(sumArray(numbers));\


// const numbers = [1, 2, 3, 4];

// const sumArray = arr => {
//   let sum = 0;
//   arr.forEach(function(element) {
//     sum += element;
//   })
//   return sum;
// }
// console.log(sumArray(numbers));

// function sayHello() {
//     console.log('Hello');
// }
// setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s

// function sayHello() {
//     console.log('Hello');
// }
// setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

// let arr = [1,2,3,4,5,6,7,8];

// arr.forEach(function (element, index, arr) {
//     console.log(element,index, arr);
// })
//   // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//     console.log(element,index, arr);
// })
//   // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr));

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
// 	sum += number;
// 	console.log(number);
// 	console.log(sum);
// });


/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
// const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map((num) => num * num + 1);

// console.log(numbersSquare);
// console.log(numbers);


// const countries = [
// 	'Albania',
// 	'Bolivia',
// 	'Canada',
// 	'Denmark',
// 	'Ethiopia',
// 	'Finland',
// 	'Germany',
// 	'Hungary',
// 	'Ireland',
// 	'Japan',
// 	'Kenya',
//   ]
// const countriesToUpperCase1 = countries.map((country) => {
// 	return country.toUpperCase();
// });
// console.log(countriesToUpperCase1);

// const countriesToUpperCase2 = countries.map((country) => country.toUpperCase());

// console.log(countriesToUpperCase2);

  
  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
	return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */
 // const countriesFirstThreeLetters = countries.map((country) =>
	// 	country.toUpperCase().slice(0, 3)
 // );
 
 // console.log(countriesFirstThreeLetters);
 
 
 //Filter countries containing land
// const countries = [
//  	'Albania',
//  	'Bolivia',
//  	'Canada',
//  	'Denmark',
//  	'Ethiopia',
//  	'Finland',
//  	'Germany',
//  	'Hungary',
//  	'Ireland',
//  	'Japan',
//  	'Kenya',
// ];
// const countriesContainingLand = countries.filter((country) =>
// 	country.includes('land')
// )
// console.log(countriesContainingLand);


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(sum);

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const areAllStr = names.every((name) => typeof name === 'string'); // Are all strings?

// console.log(areAllStr);


// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
// console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// //Now the original products array is also sorted

// const numbers = [9.81, 3.14, 100, 37];
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()); //[100, 3.14, 37, 9.81]
// numbers.sort((a, b) => {
//   return a - b;
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort((a, b) => {
//   return b - a;
// })
// console.log(numbers); //[100, 37, 9.81, 3.14]

// objArr.sort(function (a, b) {
// 	if (a.key < b.key) return -1;
// 	if (a.key > b.key) return 1;
// 	return 0;
// })
  
//   // or
  
// objArr.sort(function (a, b) {
// 	if (a['key'] < b['key']) return -1;
// 	if (a['key'] > b['key']) return 1;
// 	return 0;
// })
  
// const users = [
// 	{ name: 'Asabeneh', age: 150 },
// 	{ name: 'Brook', age: 50 },
// 	{ name: 'Eyob', age: 100 },
// 	{ name: 'Elias', age: 22 },
// ];
// users.sort((a,b) => {
// 	if (a.age < b.age) return -1
//   	if (a.age > b.age) return 1
//   	return 0
// });

// users.sort((a,b) => {
// 	if (a.age < b.age) {
// 		return -1;
// 	}
// 	if (a.age > b.age) {
// 		return 1;
// 	}
// 	return 0;
// });
			
// console.log(users);

// sorted ascending
  // [{…}, {…}, {…}, {…}]

