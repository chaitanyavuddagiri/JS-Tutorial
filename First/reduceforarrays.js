// reduce for arraysq
// it is a function that takes two arguments
// the first argument is an accumulator
// the second argument is current value
// and returns a single value
// hint: use reduce
// solution:
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (sum, number) {
	return sum + number;
}, 0);
console.log(sum);
