// Data Types
// String
// collection of characters
let name = "John";
// Number
// collection of digits can be decimal or integer
let age = 23;
// Boolean
// true or false
let isMarried = false;
// Array
// collection of values of different data types
// to create an array we use square brackets and separate each value with a comma
// to access a value in an array we use the index number of the value we want to access in the array and use square brackets ex: array[index number]
// Index starts at 0
// in the example below we are removing the last value from the array
let colors = ["red", "green", "blue"];
colors.pop();
// to add a value to an array we use the push method and pass in the value we want to add to the array
colors.push("yellow");
// to remove a value from an array we use the pop method and pass in the number of values we want to remove from the array
colors.pop();
// to remove a value from an array we use the shift method and pass in the number of values we want to remove from the array
colors.shift();
let cars = ["Ford", "BMW", "Honda"];
// Object
// collection of key value pairs
// to create an object we use curly brackets and separate each key value pair with a comma
// to access a value in an object we use the key name of the value we want to access in the object and use curly brackets ex: object[key name]
let john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
};
// to access a value in an object we use the key name of the value we want to access in the object and use curly brackets ex: object[key name]
// object.keyName is same as object["keyName"]
john.firstName;
// to change a value in an object we use the key name of the value we want to change in the object and use curly brackets ex: object[key name] = new value
john.job = "designer";
// to add a new key value pair to an object we use the key name of the value we want to add to the object and use curly brackets ex: object[key name] = new value
john.isMarried = "false";
// To access a value of an array in an object we use the key name of the array and use square brackets ex: object[key name][index number]
john.family[2];
// Null
let x = null;
// Undefined
let y;
// Symbol
let sym = Symbol();
// Date
let today = new Date();
// Math
let num = Math.PI;
// NaN
let num = NaN;
// Infinity
let num = Infinity;
