// ES2015 CLASS SYNTAX

// Objectives:
// - Explain what a class is
// - Understand how JavaScript implements the idea of classes
// - Define terms like abstraction, encapsulation, and polymorphism
// - Use ES2015 classes to implement data structures

// What is a class?
// - A blueprint for creating objects with pre-defined properties and methods
// We define a pattern for doubly linked lists, but then we can actually instantiate many
// objects, many individual linked lists using that blueprint, using our class

// JS doesn't really have classes because it's classes are syntactical sugar added in ES2015.
// It only had prototype-based inheritance. Therefore, this is not true OOP

// Why do we need to learn this?
// - We're going to implement data structures as classes!

// The Class keyword
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    // this.couldbeanyname
  }
}

// The method to create new objects must be called constructor
// The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well
// the name of the class should start with a capitalized letter as convention

// Creating objects from classes
// - We use the new keyword
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Dwight", "Schrute")
let thirdStudent = new Student("Ram", "Lag", 43)

console.log(secondStudent.firstName)
console.log(firstStudent.firstName)
console.log(thirdStudent)
console.log(thirdStudent.grade)


// Instance methods
// - SOmething we'll use much more within the course
// - They provide functionality that pertains to a single instance of in our case a Student

// For example, an array:
let data = [1,2,3]
data.push(4)
// The above code is an example of a method that acts on the individual instance (data)

class Student2 {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!"
    }
    this.tardies++;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} ${this.tardies > 1 ? 'times.' : 'time.'}`;
  }
  addScore(score){
    this.scores.push(score)
    return this.scores
  }
  calculateAverage(){
    let sum = this.scores.reduce((a,b) => {return a+b})
    return sum / this.scores.length;
  }
}

let fourthStudent = new Student2('Nikola', 'Tesla', 4)
let fifthStudent = new Student2('Thomas', 'Edison', 4)
console.log(fourthStudent.fullName())
console.log(fifthStudent.fullName())

// We can add a new method named markLate

console.log(fourthStudent.tardies)
console.log(fourthStudent.markLate())
console.log(fourthStudent.tardies)
console.log(fifthStudent.markLate())
console.log(fifthStudent.markLate())
console.log(fifthStudent.markLate())
console.log(fifthStudent.tardies)
console.log(fifthStudent.markLate())
console.log(fifthStudent.markLate())
console.log(fifthStudent.scores)
fifthStudent.addScore(65)
fifthStudent.addScore(77)
fifthStudent.addScore(63)
console.log(fifthStudent.scores)
console.log(fifthStudent.calculateAverage())
