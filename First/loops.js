// Loops
// Problem: Loops are used to repeat a block of code.
// find the sum of all the numbers from 1 to 100
// hint: use a loop
// solution:
var sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i;
}
console.log(sum);

// while loop
// Problem: Loops are used to repeat a block of code.
// find the sum of all the numbers from 1 to 100
// hint: use a loop
// solution:
var sum = 0;
var i = 1;
while (i <= 100) {
	sum += i;
	i++;
}
console.log(sum);

// do while loop
// Problem: Loops are used to repeat a block of code.
// find the sum of all the numbers from 1 to 100
// hint: use a loop
// solution:
var sum = 0;
var i = 1;
do {
	sum += i;
	i++;
} while (i <= 100);
console.log(sum);

// break
// break is used to stop the loop
// find the sum of all the numbers from 1 to 100
// hint: use a loop
// solution:
var sum = 0;
var i = 1;
while (i <= 100) {
	sum += i;
	i++;
	if (i == 50) {
		break;
	}
}
console.log(sum);

// continue
// continue is used to skip the current iteration of the loop
// find the sum of all the numbers from 1 to 100
// hint: use a loop
// solution:
var sum = 0;
var i = 1;
while (i <= 100) {
	sum += i;
	i++;
	if (i == 50) {
		continue;
	}
}
console.log(sum);

// return
// return is used to stop the function
// find the sum of all the numbers from 1 to 100
// hint: use a loop
// solution:
function add(n) {
	var sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}
console.log("return ", add(100));

// for in loop
// for in loop is used to loop through the properties of an object
// find the below object and print the name and age of each person
var obj = {
	name: "John",
	age: 30,
	city: "New York",
};
for (let key in obj) {
	console.log(key, obj[key]);
}

// for of loop
// for of loop is used to loop through the values of an array
// find the below array and print the name and age of each person
var arr = [
	{
		name: "John",
		age: 30,
		city: "New York",
	},
	{
		name: "Mike",
		age: 23,
		city: "Los Angeles",
	},
	{
		name: "Jane",
		age: 28,
		city: "Chicago",
	},
];
for (let value of arr) {
	console.log(value);
}
