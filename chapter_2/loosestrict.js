let age = 25;

// loose comparision (different types can still be equal)
console.log('==== loose comparision ====');
console.log(age == 25);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');

// strict comparision (different types cannot be equal)
console.log('==== strict comparision ====');
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
