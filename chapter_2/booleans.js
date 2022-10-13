// booleans
console.log(true, false, 'true', 'false');

// methods can return booleans
let email = 'test@test.com';
let names = ['mario', 'luigi', 'toad'];

/* Checking if the email variable contains the @ symbol. */
// string.includes - Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

// let result = email.includes('@');
let result = names.includes('luigi');
console.log(result);

// comparision operators
console.log('==== NUMBER COMPARISIONS ====');

let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

console.log('==== STRING COMPARISIONS ====');
let name = 'krishna';

console.log(name == 'krishna');
console.log(name == 'Krishna');
console.log(name > 'Krsihna');
console.log(name > 'Crystal');
