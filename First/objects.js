// Object
// collection of key value pairs
// to create an object we use curly brackets and separate each key value pair with a comma
// to access a value in an object we use the key name of the value we want to access in the object and use curly brackets ex: object[key name]
let john = {
	firstName: "John",
	lastName: "Smith",
	birthYear: 1990,
	family: ["Jane", "Mark", "Bob", "Emily"],
	job: "teacher",
};
// to access a value in an object we use the key name of the value we want to access in the object and use curly brackets ex: object[key name]
// object.keyName is same as object["keyName"]
john.firstName;
// to change a value in an object we use the key name of the value we want to change in the object and use curly brackets ex: object[key name] = new value
john.job = "designer";
// to add a new key value pair to an object we use the key name of the value we want to add to the object and use curly brackets ex: object[key name] = new value
john.isMarried = "false";
// To access a value of an array in an object we use the key name of the array and use square brackets ex: object[key name][index number]
john.family[2];
// To Remove a value from an object we use the delete keyword and pass in the key name of the value we want to remove from the object
delete john.job;

// A const object is a constant object and cannot be changed once it is created
// But it will not stop you from adding new properties to it or changing the value of existing properties
const person = {
	name: "John",
	age: 30,
};
person.name = "something else";
console.log(person);

// object freeze
// to freeze an object we use the Object.freeze method and pass in the object we want to freeze
const person1 = {
	name: "John",
	age: 30,
};
Object.freeze(person1);
person1.name = "something else";
console.log(person1);

// in operator
// to check if a value is present in an object we use the in operator
// find the below code
let user = {
	name: "John",
	age: 30,
};
console.log("name" in user);

// hasOwnProperty()
// to check if a value is present in an object we use the hasOwnProperty() method
// find the below code
let user1 = {
	name: "John",
	age: 30,
};
console.log(user1.hasOwnProperty("name"));

// Object.keys()
// to get all the keys of an object we use the Object.keys() method and pass in the object we want to get the keys of
// find the below code
let user2 = {
	name: "John",
	age: 30,
};
console.log(Object.keys(user2));

// Object.values()
// to get all the values of an object we use the Object.values() method and pass in the object we want to get the values of
// find the below code
let user3 = {
	name: "John",
	age: 30,
};
console.log(Object.values(user3));

// Object.entries()
// to get all the key value pairs of an object we use the Object.entries() method and pass in the object we want to get the key value pairs of
// find the below code
let user4 = {
	name: "John",
	age: 30,
};
console.log(Object.entries(user4));
