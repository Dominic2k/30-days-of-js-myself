// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;

// console.log(numOne, numTwo, numThree);

// console.log(numOne + 1);
// console.log(numTwo + 2);
// console.log(numThree + 3);



// const scientificConstants = [2.72, 3.14, 9.81, 37.5, 100];
// let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

// console.log(e,pi,gravity, bodyTemp, boilingTemp);

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB'],
//     ['Get married']
//   ]
// const [frontEnd, backEnd] = fullStack
// const [,,goHome] = fullStack;
  
// console.log(frontEnd);
// console.log(backEnd);
// console.log(goHome);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = nums;

// console.log(num1, num2, num3);
// console.log(rest);

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

// for (const [country, city] of countries) {
//     console.log(country, city);
// }


// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB', 'SQL']
// ];
  
// for(const [first, second, third, fourth] of fullStack) {
//     console.log(first, second, third, fourth);
// }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }
// let { width, height, area, perimeter } = rectangle;
  
// console.log(width, height, area, perimeter);


// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
// }
// let { width: w, height: h, area: a, perimeter: p } = rectangle;
  
// console.log(w, h, a, p);


// const rect = {
//     width: 20,
//     height: 10
// };

// // let calculatePerimeter = (rectangle) => {
// //     return 2 * (rectangle.width + rectangle.height);
// // }

// // console.log(calculatePerimeter(rect));


// const calculatePerimeter = ({ width, height }) => {
//     return 2 * (width + height);
// };
  
// console.log(calculatePerimeter(rect)); // 60


// Let us create a function which give information about the person object with destructuring

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
// const getPersonInfo = ({
//     firstName,
//     lastName,
//     age,
//     country,
//     job,
//     skills,
//     languages
//   }) => {
//     const formattedSkills = skills.slice(0, -1).join(', ');
//     const formattedLanguages = languages.slice(0, -1).join(', ');
  
//     const personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
  
//     return personInfo;
// }
// console.log(getPersonInfo(person));


// const todoList = [
//     {
//       task:'Prepare JS Test',
//       time:'4/1/2020 8:30',
//       completed:true
//     },
//     {
//       task:'Give JS Test',
//       time:'4/1/2020 10:00',
//       completed:false
//     },
//     {
//       task:'Assess Test Result',
//       time:'4/1/2020 1:00',
//       completed:false
//     }
//     ];

// for (const {task, time, completed} of todoList){
//     console.log(`Task: ${task}, Time: ${time}, Completed: ${completed}`);
// };


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...orther] = nums;

// console.log(num1, num2, num3);
// console.log(orther);


// const evens = [0, 2, 4, 6, 8, 10];
// const evenSame = [evens];
// const evenNumbers = [...evens];

// const odds = [1, 3, 5, 7, 9];
// const oddSame = [odds];
// const oddNumbers = [...odds];


// const wholeNumbersSame = [evenSame, oddSame];
// const wholeNumbers = [...evens, ...odds];

// console.log(evenNumbers);
// console.log(evenSame);

// console.log(oddNumbers);
// console.log(oddNumbers);

// console.log(wholeNumbers)
// console.log(wholeNumbersSame);



const sumAllNums = (...args) => {
    let sum = 0;
    for (const num of args){
      sum += num;
    }
    return sum;
};
  
  console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7));

