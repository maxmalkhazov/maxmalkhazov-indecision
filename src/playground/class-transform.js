

class OldSyntax {
	constructor() {
		this.name = "Mike";
		this.getGreeting = this.getGreeting.bind(this); // this requited to keep the binding of this
	}
	getGreeting() {
		return `Hi. My name is ${this.name}`
	}
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

/* -- This messes up the binding and will cause an error (the 'this' becomes undefined):
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
*/


// -------------

class NewSyntax {
	name = "John";
	getGreeting = () => {
		return `Hi. My name is ${this.name}`;
	}
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting()); // no binding needed