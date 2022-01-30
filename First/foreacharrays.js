//foreach arrays
// foreach is a function that takes an array and a function as arguments and returns nothing222
// instead of returning a new array, it loops through the array and calls the function for each element
// hint: use foreach
// solution:
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
	console.log(number * number);
});
