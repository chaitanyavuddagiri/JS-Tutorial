const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamepattern = /^[a-zA-Z0-9]{6,12}$/;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log(username.value);

	// we can use the dot notation with from when we use ID or name attribute
	// console.log(form.username.value);

	// validation
	const username = form.username.value;

	if (usernamepattern.test(username)) {
		// feedback good info
		feedback.textContent = 'that username is valid!';
	} else {
		// feedback bad info
		feedback.textContent =
			'username mush contains letters only and be between 6 & 12 characters long';
	}
});

// REGULAR EXPRESSION
// const username = 'krishna';
// const pattern = /^[a-z]{6,}$/;

// method 1
// let result = pattern.test(username);
// if (result) {
// 	console.log('regex test passed');
// } else {
// 	console.log('regex test failed');
// }

// method 2
// let result = username.search(pattern);
// console.log(result);

// keyboard events
form.username.addEventListener('keyup', (e) => {
	// console.log(e.target.value, form.username.value);
	if (usernamepattern.test(e.target.value)) {
		form.username.setAttribute('class', 'success');

		// console.log('passed');
	} else {
		form.username.setAttribute('class', 'error');
		// console.log('failed');
	}
});
