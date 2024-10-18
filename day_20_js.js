// const hexaColor = () => {
//     const str = '0123456789abcdef'
//     let hexa = '#'
//     let index
//     for (let i = 0; i < 6; i++) {
//       index = Math.floor(Math.random() * str.length)
//       hexa += str[index]
//     }
//     return hexa  
// }

// console.log(hexaColor());

// const showDateTime = () => {
// 	const now = new Date()
// 	const year = now.getFullYear()
// 	const month = now.getMonth() + 1
// 	const date = now.getDate()
// 	let hours = now.getHours()
// 	let minutes = now.getMinutes()
// 	if (hours < 10) {
// 	  hours = '0' + hours
// 	}
// 	if (minutes < 10) {
// 	  minutes = '0' + minutes
// 	}
  
// 	const dateMonthYear = date + '.' + month + '.' + year
// 	const time = hours + ':' + minutes
// 	const fullTime = dateMonthYear + ' ' + time
// 	return fullTime
// }


const person = {
	firstName: 'Asabeneh',
	lastName: 'Yetayeh',
	age: 250,
	country: 'Finland',
	city: 'Helsinki',
	skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
	isMarried: true
}
for(const key in person) {
	console.log(key)
}

