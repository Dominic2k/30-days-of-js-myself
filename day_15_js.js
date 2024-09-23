// class Person {
//     constructor(firstName = "Pham", lastName = "Dat", age = 19, country = "VietNam", city = "DNang") {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//       this.country = country;
//       this.city = city;
//     }
// };
  
// const person1 = new Person(); // it will take the default values
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

// console.log(person1);
// console.log(person2);

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     /**
//      * @param {number} score
//      */
//     set setScore(score) {
//       this.score += score
//     }
//     /**
//      * @param {string} skill
//      */
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }

//     /**
//      * @param {string} firstName
//      */
//     set setFirstName(firstName) {
//         this.firstName = firstName;
//     }
    
//   }
  
//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'
//   person1.setFirstName = "Dat Pham";
  
//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'
//   person2.setFirstName = "Nguyen Thi";
  
//   console.log(person1.score)
//   console.log(person1.firstName)
//   console.log(person2.score)
//   console.log(person2.firstName)
  
  
//   console.log(person1.skills)
//   console.log(person2.skills)


// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.country = country;
//         this.city = city;
//         this.score = 0;
//         this.skills = [];
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName;
//         return fullName;
//     }

//     get getFullTheName() {
//         return this.firstName + ' ' + this.lastName;
//     }

//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//   };
  
//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');
  
//   console.log(person1.getFullName()); // We do not need parenthesis to call a getter method
//   console.log(person1.getFullTheName);


// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//   }
  
//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
//   person1.setScore = 1
//   person1.setSkill = 'HTML'
//   person1.setSkill = 'CSS'
//   person1.setSkill = 'JavaScript'
  
//   person2.setScore = 1
//   person2.setSkill = 'Planning'
//   person2.setSkill = 'Managing'
//   person2.setSkill = 'Organizing'
  
//   console.log(person1)
//   console.log(person2)

//   console.log(person1.score)
//   console.log(person2.score)
  
//   console.log(person1.skills)
//   console.log(person2.skills)



// class Person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills =
//             this.skills.length > 0 &&
//             this.skills.slice(0, this.skills.length - 1).join(', ') +
//             ` and ${this.skills[this.skills.length - 1]}`
  
//         let formattedSkills = skills ? `He knows ${skills}` : ''
  
//         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//         return info
//     }
//     static favoriteSkill() {
//         const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//         const index = Math.floor(Math.random() * skills.length)
//         return skills[index]
//     }
//     static showDateTime() {
//         let now = new Date()
//         let year = now.getFullYear()
//         let month = now.getMonth() + 1
//         let date = now.getDate()
//         let hours = now.getHours()
//         let minutes = now.getMinutes()
//         if (hours < 10) {
//             hours = '0' + hours
//         }
//         if (minutes < 10) {
//             minutes = '0' + minutes
//         }
    
//         let dateMonthYear = date + '.' + month + '.' + year
//         let time = hours + ':' + minutes
//         let fullTime = dateMonthYear + ' ' + time
//         return fullTime
//     }
//   }
  
//   console.log(Person.favoriteSkill())
//   console.log(Person.showDateTime())

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;
    
    const usersObj = JSON.parse(usersText, undefined, 4);
    console.log(usersObj);
    console.log(typeof(usersObj));


