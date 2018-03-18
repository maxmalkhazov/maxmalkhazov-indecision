class Person {
	constructor(name = "anonymous", age = 0) {
		this.name = name;
		this.age = age;
	}
	
	getGreeting() {
		return `My name is ${this.name}.`;
	}
	
	getDescription() {
		return `Hello! My name is ${this.name}, and I'm ${this.age} years old. I live in ${this.location}.`;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	
	hasHomeLocation() {
		return !!this.homeLocation;
	}
	
	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			greeting += ` I am visiting from ${this.homeLocation}.`;
		}
		
		return greeting;
	}
	
	
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	
	hasMajor() {
		return !!this.major;
	}
	
	getDescription() {
		let description = super.getDescription();
		
		if (this.hasMajor) {
			description += ` the major is ${this.major}`; 
		}
		
		return description;
	}
}

const me = new Traveler("Max", 31, "Chicago");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());


