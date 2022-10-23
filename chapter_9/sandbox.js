// ARRAY METHODS

// FILTER - filters an array with the given condition it will not change the original array
console.log('==== FILTER METHOD ====');

const scores = [10, 30, 15, 25, 50, 40, 5];

const newArray = scores.filter((item) => item > 20);

console.log('scores === ', scores);
console.log('new scores === ', newArray);

const users = [
	{ name: 'shaun', premium: true },
	{ name: 'yoshi', premium: false },
	{ name: 'mario', premium: false },
	{ name: 'chun-li', premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
console.log('premium users', premiumUsers);

// MAP - Iterates and updates each value of an array and returns new array it will not change the original array
console.log('==== MAP METHOD ====');

const prices = [20, 10, 30, 25, , 15, 40, 80, 5];
const salePrice = prices.map((price) => price / 2);

console.log('sale prices = ', salePrice);

const products = [
	{ name: 'glod star', price: 20 },
	{ name: 'mushroom', price: 40 },
	{ name: 'green shells', price: 30 },
	{ name: 'banana skin', price: 10 },
	{ name: 'red shells', price: 50 },
];

const saleProducts = products.map((product) => {
	if (product.price > 30) {
		return { name: product.name, price: product.price / 2 };
	} else {
		return product;
	}

	// this will modify the original array
	// if (product.price > 30) product.price /= 2;
	// return product;
});

console.log('Sales product', saleProducts);

// REDUCE - Iterates and return any single value which could an array or number or a string
console.log('==== REDUCE METHOD ====');

const values = [10, 20, 60, 40, 70, 90, 30];

// get how many values are over 50
const result = values.reduce((acc, curr) => {
	if (curr > 50) {
		acc++;
	}

	return acc;
}, 0);

console.log(result);

const userScores = [
	{ player: 'mario', score: 50 },
	{ player: 'yoshi', score: 30 },
	{ player: 'mario', score: 70 },
	{ player: 'chun-li', score: 60 },
];

const marioTotal = userScores.reduce((acc, curr) => {
	if (curr.player === 'mario') acc += curr.score;
	return acc;
}, 0);

console.log('marioTotal ==== ', marioTotal);

// FIND - Iterates and return the first value inside an array that satisfy the certain test in a callback function
console.log('==== FIND METHOD ====');

const myScores = [10, 5, 0, 40, 60, 10, 20, 70];
const firstHighScore = myScores.find((score) => score > 50);

console.log('firstHighScore == ', firstHighScore);

// SORT - Iterates and rearraing the items of an array in either asending or decending order
console.log('==== SORT METHOD ====');

// example 1 - sorting string
const names = ['Chandu', 'Chaitu', 'Namasvi', 'Harsha', 'Bharat', 'Vamsi'];
names.sort();
names.reverse();
console.log(names);

// example 2- sorting number
const ourscores = [10, 50, 20, 5, 35, 70, 45];
// ourscores.sort();
// ourscores.reverse();
ourscores.sort((a, b) => a - b);
console.log(ourscores);

// example 3 - sorting objects
const players = [
	{ player: 'mario', score: 20 },
	{ player: 'yoshi', score: 10 },
	{ player: 'mario', score: 50 },
	{ player: 'yoshi', score: 30 },
	{ player: 'shaun', score: 70 },
];

// -1 to return a, 1 to return b, 0 to not sort
// players.sort((a, b) => {
// 	if (a.score > b.score) {
// 		return -1;
// 	} else if (b.score > a.score) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// });

players.sort((a, b) => b.score - a.score);

console.log(players);

// CHAINING ARRAY METHODS
console.log('==== CHAINING ARRAY METHODS ====');
const myProducts = [
	{ name: 'glod star', price: 20 },
	{ name: 'mushroom', price: 40 },
	{ name: 'green shells', price: 30 },
	{ name: 'banana skin', price: 10 },
	{ name: 'red shells', price: 50 },
];

// const filterdProducts = myProducts.filter((product) => product.price > 20);

// const promos = filterdProducts.map((product) => {
// 	return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = myProducts
	.filter((product) => product.price > 20)
	.map((product) => {
		return `the ${product.name} is ${product.price / 2} pounds`;
	});

console.table(promos);
