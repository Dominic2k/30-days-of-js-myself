class Person {
    constructor(firstName = "Pham", lastName = "Dat", age = 19, country = "VietNam", city = "DNang") {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
    }
};
  
const person1 = new Person(); // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(person1);
console.log(person2);