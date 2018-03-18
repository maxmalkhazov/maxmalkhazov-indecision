
// VAR - can reassign, can redefine
var nameVar = "Max";
var nameVar = "Mike";
console.log("nameVar", nameVar);



// LET = can reassign, CAN'T redefine
let nameLet = "John";
// let nameLet = "Jack" - won't work
nameLet = "Jack";
console.log("nameLet", nameLet);



// CONST = cannot reassing, cannot redefine
const nameConst = "Jeff";
console.log("nameConst", nameConst);



// Block scoping

// VAR =  Function scoped only
var fullName = "Max Malkhazov";

if (fullName) {
	var firstName = fullName.split(" ")[0];
	console.log(firstName);
}

console.log(firstName);


// CONST / LET = Block level scoped(includes functions, if statements, loops)
