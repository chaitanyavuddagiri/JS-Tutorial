let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operatior +,-,*,/, **, %
console.log(10 / 2); // quotient
console.log(10 % 2); // reminder

let result = radius % 3;
console.log(result);

/* Calculating the area of a circle. */
let areaOfCircle = pi * radius ** 2;
console.log(areaOfCircle);

// order of operation - B I D M A S
let complexResult = 5 * (10 - 3) ** 2;
console.log(complexResult);

let likes = 10;
// likes = likes + 1;
likes++;
likes--;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;

console.log(likes);

// NaN = not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

// concatination numbers
let concatinationResult = 'this blog has ' + likes + ' likes';
console.log(concatinationResult);
