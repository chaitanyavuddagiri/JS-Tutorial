// map of arrays
// map is a function that takes an array and a function as arguments
// and returns a new array with the results of the function
// hint: use map
// solution:
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) {
	return number * 2;
});
console.log(doubledNumbers);
