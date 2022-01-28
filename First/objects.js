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
