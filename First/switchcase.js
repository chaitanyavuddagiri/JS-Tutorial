//switchcase example
// switch is a statement that executes a block of code depending on different cases
// for example below we are checking if the value of the variable age is greater than 18
// if the value of age is greater than 18 we will print "You are an adult"
// if the value of age is less than 18 we will print "You are a child"
// if the value of age is not a number we will print "You are not a number"
// if the value of age is not a number or is less than 18 or greater than 18 we will print "You are not a number or a child or an adult"
// every case must be followed by a break statement
// break statement is used to stop the execution of the switch statement
// break statement is optional
// if no break statement is used the switch statement will continue to execute the next case
let age = "twenty";
switch (age) {
	case "twenty":
		console.log("You are an adult");
		break;
	case "ten":
		console.log("You are a child");
		break;
	default:
		console.log("You are not a number");
}
