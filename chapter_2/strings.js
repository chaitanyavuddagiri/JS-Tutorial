//SRTINGS
console.log('hello world');

let email = 'test@stest.com';
console.log(email);

// string contatination - joining two or more string
let firstName = 'Krishna';
let lastname = 'Chaitanya';

let fullName = firstName + ' ' + lastname;
console.log('string concatination - ', fullName);

// getting characters
// a string is an array of characters
console.log('get a character from a string = ', fullName[2]);

// string length - to find the length of the string
console.log('length of a string - ', fullName.length);

// string methods
console.log('To upper case = ', fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log('lower case = ', result);

let index = email.indexOf('@');
console.log(index);

// common string methods
let myemail = 'krishnachaitanya@gmail.com';

/* Finding the last occurance of the character 'n' in the string myemail. */
// lastIndexOf - Returns the last occurrence of a substring in the string.
let lastN = myemail.lastIndexOf('n');
console.log('last index of n - ', lastN);

/* Slicing the string from index 0 to 10. */
// slice - Returns a section of a string.
let slicedResult = myemail.slice(0, 10);
console.log('slice the email= ', slicedResult);

/* Taking the string myemail and returning the substring from the 4th character to the 10th character. */
// substring - Returns the substring at the specified location within a String object.
let subResult = myemail.substring(4, 10);
console.log('substring of email- ', subResult);

/* Replacing the first occurance of the character 'k' with the character 'K' in the string myemail. */
// Replace - Replaces text in a string, using a regular expression or search string.
let replaceResult = myemail.replace('k', 'K');
console.log('Replaced character - ', replaceResult);

// TEMPLATE STRINGS
const title = 'Best reads of 2022';
const author = 'Krishna';
const likes = 30;

// concatination way
let concatinatedString =
	'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log('concatination way ===', concatinatedString);

// template string way (string literal)
let templateString = `The blog called ${title} by ${author} has ${likes} likes`;
console.log('template way == ', templateString);

// create html template
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);

let age = null;
console.log('age === ', age, age + 3, `the age is ${age}`);
