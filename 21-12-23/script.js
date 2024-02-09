/* // Lektion Torsdag genomgång

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log (`hello my name is ${this.name} and im ${this.age}`);
    }
}


let person = new Person("Kalle", 35)
let person1 = new Person("Johan", 40)
let person2 = new Person("Sam", 28)
let person3 = new Person("Filip", 30)
let person4 = new Person("Mike", 20)

console.log (person.name);
console.log (person.age);
console.log (greet());

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    introduce(){
        console.log (`hello my name is ${this.name} and im ${this.age} years old and work as a ${this.position}.`);
    }
}

let Employee1 = new Employee("Alice", 30, "manager");
console.log(Employee1.greet);
 */
/****************************************/


class viacle {
    constructor(passenger, topspeed, wheels) {
        this.passenger = passenger;
        this.topspeed = topspeed;
        this.wheels = wheels;
    }

    speed(){
        console.log (`The highest speed this viacle can give is ${this.topspeed}`);
    }
}

class boat extends viacle {
    constructor(passenger, topspeed, wheels, dept) {
        super(passenger, topspeed, wheels);
        this.dept = dept;
    }
}

class car extends viacle {
    constructor(passenger, topspeed, wheels, fuel) {
        super(passenger, topspeed, wheels);
        this.fuel = fuel;
    }
}

let viacle1 = new boat(6, "10 knots", 0, "80cm")
console.log(viacle1)
viacle1.speed();

let viacle2 = new car(5, "180km/h", 4, "diesel")
console.log (viacle2);
viacle2.speed();