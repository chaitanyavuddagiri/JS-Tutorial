let ninjas = ['krishna', 'chandana', 'namasvi'];
console.log(ninjas);

// get item from arrays
console.log(ninjas[1]);

// replace an array item
ninjas[0] = 'chaitanya';
console.log(ninjas);

// we can store different datatypes in arrays
let ages = [20, 25, 30, 35];
console.log(ages[2]);

// we can mix different datatypes in array
let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// comment methods and properties

// array.length - is used to get the length of an array
console.log('length of random array === ', random.length);

// array methods

// array.join() - Adds all the elements of an array into a string, separated by the specified separator string.
let joinedArray = random.join('-');
console.log('joined random array === ', joinedArray);

// array.indexOf() - Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let indexOfArray = random.indexOf(30);
console.log('indexOf value 30 in randeom array === ', indexOfArray);

// array.concat() - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let concateArray = ninjas.concat(random);
console.log('concatinated array === ', concateArray);

// array.push() - Appends new elements to the end of an array, and returns the new length of the
let pushArray = random.push(40);
console.log('pushed random array === ', pushArray);
console.log('New random array === ', random);

// array.pop() - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let popArray = random.pop();
console.log('poped random array === ', popArray);
console.log('New random array === ', random);
