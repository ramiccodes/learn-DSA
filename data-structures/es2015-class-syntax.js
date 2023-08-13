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