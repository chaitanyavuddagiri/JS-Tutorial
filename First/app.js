//documnet.write will write the text to the page
document.write("Hello World");
// Alert will pop up a message box
alert("Hello World");
// confirm and prompt
// confirm will pop up a question box and return true or false
// prompt will pop up a message box and ask for input
var name = confirm("are you sure you want to delete?");
// prompt will pop up a message box and ask for input
var name = prompt("What is your name?");

// console.log will print the text to the console
console.log("Hello " + name);
// document.getElementById will get the element with the id of "name"
document.getElementById("name").innerHTML = "Hello " + name;

// let var const
// creating a variable
// a variable is a container for storing data
// let is only available in the block it was created in
let name = "John";
// a variable can be reassigned
// example below is a function that creates a variable
// var can be used to reassign a variable even if it was declared with let or const
// var is accessible anywhere in the function and can be reassigned
var ilike = "Coding";
// creating a constant
// a constant cannot be changed
const pi = 3.14;

// Functions
// A function is a reusable block of code that performs a task
// return is used to return a value from a function
// if a function doesn't return a value it will return undefined
// to create a function we use the function keyword and pass in the name of the function
// to call a function we use the function name and pass in the arguments we want to pass in
function greet(firstName, lastName) {
	return "Hello " + firstName + " " + lastName;
}
// to call a function we use the function name and pass in the arguments we want to pass in
greet("John", "Smith");
// Default arguments
// if we don't pass in an argument when we call a function we will use the default argument
function greet(firstName = "John", lastName = "Smith") {
	return "Hello " + firstName + " " + lastName;
}
// Rest and Spread Operator
// Rest operator
// we use the ... before the parameter name to indicate that we want to pass in multiple arguments
function greet(firstName, ...restOfName) {
	return "Hello " + firstName + " " + restOfName.join(" ");
}
// Spread operator
// we use the ... before the parameter name to indicate that we want to pass in multiple arguments
function greet(firstName, ...restOfName) {
	return "Hello " + firstName + " " + restOfName.join(" ");
}
// to call a function we use the function name and pass in the arguments we want to pass in
greet("John", "Smith", "Sally", "Jane");
// Anonymous functions
// we can create a function without a name
// following is the example of an anonymous function
let square = function (x) {
	return x * x;
};
// to call a function we use the function name and pass in the arguments we want to pass in
square(5);

// Scope
// a variable is only available inside the function it was created in
// example below is a function that creates a variable
function greet() {
	var name = "John";
}
// to access a variable we use the variable name and use curly brackets ex: variableName
name;
//hoisting
// a variable can be declared before it is used
// example below is a function that creates a variable
function greet() {
	name = "John";
}
