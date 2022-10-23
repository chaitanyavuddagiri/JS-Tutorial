const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const resultsContainer = document.querySelector('.result');
// const resultsDiv = document.querySelector('.result')

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let score = 0;
	const userAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
	];

	// check answers
	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});

	scrollTo(0, 0);
	resultsContainer.classList.remove('d-none');
	let output = 0;

	let timer = setInterval(() => {
		resultsContainer.querySelector('span').textContent = `${output + 1}%`;
		output++;
		if (output === score) clearInterval(timer);
	}, 10);
});

// window object(global object)
// Window keyword is inferred - no need to use the window keyword explicitly

//console.log('hello')
//window. console.log('hello')

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello')
// window.alert('hello')

// let i = 0;
// const timer = setInterval(() => {
// 	console.log('hello');
// 	i++;
// 	if (i === 5) {
// 		clearInterval(timer);
// 	}
// }, 1000);
