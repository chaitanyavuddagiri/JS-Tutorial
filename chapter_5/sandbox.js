console.log('==== OBJECT LITERALS ====');

let user = {
	name: 'krishna',
	age: 30,
	email: 'krishna@gamil.com',
	location: 'berlin',
	blogs: ['11 years of industry experience is nothing', 'time to change'],
	login() {
		console.log('users logged in');
	},
	logout() {
		console.log('user logged out');
	},
	logBlocks() {
		console.log('this users has written following blogs:');
		this.blogs.forEach((blog) => console.log(blog));
	},
};

user.age = 35;

console.log(user.age);

console.log(user['email']);

user['name'] = 'test';

console.log(user['name']);

console.log(typeof user);

console.log('==== OBJECT METHODS ====');
user.login();
user.logout();

console.log("==== 'this' keyword ====");
// console.log('global == ', this);
user.logBlocks();

console.log('==== object in arrays ====');
const blogs = [
	{ title: '11 years of industry experience is nothing', likes: 30 },
	{ title: 'time to change', likes: 50 },
];

user.blogs = blogs;
user.logBlocks = function () {
	this.blogs.forEach((blog) => console.log(blog.title, blog.likes));
};
// console.table(blogs);
user.logBlocks();

console.log('==== Math Objects ====');
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.1;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// generate random number using Math object
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

// Premitive and reference types
console.log('==== Permitive & Reference Types ====');

console.log('==== Permitive ====');
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scroeOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scroeOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

console.log('==== Permitive ====');
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.name = 'chun-li';

console.log(userOne, userTwo);
