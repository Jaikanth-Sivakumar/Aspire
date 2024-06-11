//Classes
//ES6-Introduced 'class' syntax
console.log('---Class---');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person = new Person('Jai', 22);
person.greet();



//Inheritance
//JS support inheritance using 'extends'
console.log('');
console.log('---Inheritance---');
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`I am working as a ${this.jobTitle}.`);
    }
}

const employee = new Employee('surya', 23, 'Software Engineer');
employee.greet(); 
employee.work();



//Encapsulation
console.log('');
console.log('---Encapsulation---');
function Car(make, model) {
    let year = 2020; // private variable
    this.make = make;
    this.model = model;

    this.getDetails = function() {
        return `${year} ${this.make} ${this.model}`;
    };
}

const car = new Car('Toyota', 'Corolla');
console.log(car.getDetails()); // Output: 2020 Toyota Corolla
console.log(car.year); // Output: undefined (cannot access private variable)
console.log(car.make);



//Polymorphism
console.log('');
console.log('---Polymorphism---');
class Animal {
    makeSound() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Cat meows');
    }
}

function makeSound(animal) {
    animal.makeSound();
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

makeSound(animal); 
makeSound(dog);    
makeSound(cat);    



//Abstraction
console.log('');
console.log('---Abstraction---');
class Shape {
    draw() {
        throw new Error('Method draw() must be implemented');
    }
}
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

const circle = new Circle();

circle.draw();
