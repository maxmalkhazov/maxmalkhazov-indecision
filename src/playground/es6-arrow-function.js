// ES5

const square = function(x) {
	return x * x;
};


// ES6

const squareArrow = (x) => {
	return x * x;
};

const squareArrow2 = (x) => x * x;


const getFirstName = (fullName) => fullName.split(" ")[0];
const getLastName = (fullName) => fullName.split(" ")[1];

console.log(getLastName("Maxim Malkhazov"));