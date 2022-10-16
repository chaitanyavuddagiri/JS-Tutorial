console.log('Function and Methods');

// function declaration
function greet() {
	console.log('hello there');
}

greet();

// function expression
const speak = function () {
	console.log('good day');
};

speak();

// arrow functions
// const area = (radius) => {
// 	return 3.14 * radius ** 2;
// };

const area = (radius) => 3.14 * radius ** 2;

console.log(area(100));

// callbacks and forearch
console.log('==== CALLBACKS AND FOREACH ====');

// callback
const myfnuc = (callbackFnuc) => {
	let value = 6;
	callbackFnuc(value);
};

myfnuc((value) => console.log(value));

let brothers = ['krishna', 'harsha', 'bharat', 'vamsi'];

const logPerson = (person, index) => console.log(`${index + 1}. ${person}`);

brothers.forEach((value, index) => logPerson(value, index));

const ul = document.querySelector('.people');

let html = ``;
brothers.forEach(
	(brother, index) => (html += `<li style="color: purple">${brother}</li>`)
);

console.log(html);
ul.innerHTML = html;
