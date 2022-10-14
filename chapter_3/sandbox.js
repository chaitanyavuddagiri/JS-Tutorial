// for loop
console.log('==== FOR LOOP ====');
for (let i = 0; i < 5; i++) {
	console.log(i);
}

const names = ['Krishna', 'Harsha', 'Bharat', 'Vamsi'];

for (let i = 0; i < names.length; i++) {
	// console.log(names[i]);
	let html = `<div>${names[i]}</div>`;
	console.log(html);
}

console.log('==== WHILE LOOP ====');

let i = 0;
while (i < 5) {
	console.log(i);
	i++;
}

i = 0;
while (i < names.length) {
	console.log(names[i]);
	i++;
}

console.log('==== DO WHILE LOOP ====');

i = 0;
do {
	console.log(i);
	i++;
} while (i < 5);

if (names.length > 3) {
	console.log("that's a lot of ninjas");
}
