// Index off
// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// find the below code
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.indexOf(1));

// includes method returns true if the given element is present in the array.
// find the below code
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1.includes(1));

// find method returns the first element of the array that satisfies the provided testing function.
// find the below code
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
	arr2.find(function (value) {
		return value > 5;
	})
);

// findIndex method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// find the below code
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
	arr3.findIndex(function (value) {
		return value > 5;
	})
);

// == vs ===
// == is used to compare the value of two variables.
// === is used to compare the value and type of two variables.
// find the below code
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

// compare the arrays using == vs ===
// find the below code
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr4 == arr5); // false because they are not the same object in memory
console.log(arr4 === arr5); // false because they are not the same object in memory
