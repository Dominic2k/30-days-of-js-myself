// //Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS'];
//       callback(false, skills);
//     }, 2000);
// };
  
//   const callbackkk = (err, result) => {
//     if (err) {
//       return console.log(err);
//     }
//     return console.log(result);
// };
  
// doSomething(callbackkk);

// Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS'];
//     if (skills.length > 0) {
//       resolve(skills);
//     } else {
//       reject('Something wrong has happened');
//     }
//   }, 2000);
// })

// doPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => console.log(error));

// Promise
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS'];
//     if (skills.includes('Node')) {
//       resolve('fullstack developer');
//     } else {
//       reject('Something wrong has happened');
//     }
//   }, 2000);
// })

// doPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => console.error(error));

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error))

// fetch('https://restcountries.com/v2/all')
// 	.then(response => response.json())
// 	.then(data => console.log(data))    // In ra phản hồi từ server
// 	.catch(error => console.error('Lỗi:', error)); // Xử lý lỗi nếu có


const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
	try {
	  const response = await fetch(catsAPI)
	  const countries = await response.json()
	  console.log(countries)
	} catch (err) {
	  console.error(err)
	}
  }
console.log('===== async and await')
fetchData()
  