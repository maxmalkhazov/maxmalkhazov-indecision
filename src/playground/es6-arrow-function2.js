// argument object - no longer bound with arrow functions.

const add = (a, b) => {
	// console.log(arguments) - won't work with arrow function
	return a + b;
};


// this keyword - no longer bound.

const user = {
	name: "Max",
	cities: ["Chicago", "Miami"],
	printCities: function() {
		// here we should use regular es5 function, otherwise the 'this.cities' will be undefined as it won't be refering to the user object but to it's parent, the window object.
		
		this.cities.forEach((city) => {
			// this.name won't be accesible here
			// we can do const that = this; (workaround)
			// es6 arrow functions no longer bind their own 'this' value, instead they use the 'this' value of the context they were created in.
			// so by using an arrow function we can use this.name;
			console.log(this.name + " has lived in " + city);
		});
	}
};

user.printCities();

const user2 = {
	name: "Max",
	cities: ["London", "Manchester"],
	printCities: function() {
		return this.cities.map((city) => this.name + " has been to " + city);
	}
};

console.log(user2.printCities());

const multiplier = {
	numbers: [3, 6, 9],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((num) => this.multiplyBy * num);
	}
};

console.log(multiplier.multiply());