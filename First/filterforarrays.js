// filter for arrays
// filter is a function that takes an array and a function as arguments
// and returns a new array with the results of the function
// hint: use filter
// solution:
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (number) {
	return number % 2 === 0;
});
console.log(evenNumbers);
