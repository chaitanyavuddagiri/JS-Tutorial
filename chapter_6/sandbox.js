// console.log('==== document object model ====');

// const para = document.querySelector('body > h1:nth-child(1)');
// console.log(para);

// // Get multiple elemetns
// const paras = document.querySelectorAll('p');
// console.log(paras);

// paras.forEach((para) => console.log(para));

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log('title ====', title);

// // get elements by classname
// const elements = document.getElementsByClassName('error');
// console.log(elements);

// // get elements by tag name
// const allParas = document.getElementsByTagName('p');
// console.log('paras');

// Adding and changing page content
// const para = document.querySelector('p');
// para.innerHTML = 'welcome to DOM';
// console.log(para.innerText);

// const paras = document.querySelectorAll('p');
// paras.forEach((para) => (para.innerText += ' new text'));

// const content = document.querySelector('.content');
// content.innerHTML += '<h2> this is new html </h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach((person) => {
// 	content.innerHTML += `<p>${person}</p>`;
// });
// console.log(content.innerHTML);

// // getting and setting attributes
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja';

// const message = document.querySelector('.error');
// console.log(message.getAttribute('class'));
// message.setAttribute('class', 'success');
// message.setAttribute('style', 'color:green');
// message.innerHTML = 'this is a success message';
// console.log(message.getAttribute('class'));

// const title = document.getElementById('page-title');
// // title.setAttribute('style', 'margin:50px');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '40px';
// title.style.margin = '';
// console.log(title.style);

// innerText - will give all the visible text in the brower element
// textContent - will give all the content in the brower element
//const paras = document.querySelectorAll('p');

// const getClassName = (para) => {
// 	let className = '';
// 	if (para.textContent.includes('error')) className = 'error';
// 	else if (para.textContent.includes('success')) className = 'success';

// 	return className;
// };

// paras.forEach((para) => {
// 	// let className = getClassName(para);

// 	// className && para.classList.add(className);

// 	if (para.textContent.includes('error')) para.classList.add('error');
// 	else if (para.textContent.includes('success'))
// 		para.classList.add('success');
// });

// PARENT, CHILDREN AND SIBLINGS
// const article = document.querySelector('article');

/* Returning an HTMLCollection of all the children of the article element. */
// console.log(article.children);

// covert HtmlCollection to Array
// console.log(Array.from(article.children));

// Array.from(article.children).forEach((child) => {
// 	child.classList.add('article-element');
// });

// // Getting parent element
// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling); // null if it doesnt exist

// // chaining
// console.log(title.nextElementSibling.parentElement.children);

// EVNETS
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// 	console.log('you clicked me');
// });
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
	//create dom element
	const li = document.createElement('li');
	li.textContent = 'Something New todo';

	//appending to the parent
	// ul.append(li);
	ul.prepend(li);
});

// EVENT BUBBLING(AND DELIGATION)
// const items = document.querySelectorAll('li');
// items.forEach((item) => {
// 	item.addEventListener('click', (e) => {
// 		// console.log(e.target);
// 		// e.target.style.textDecoration = 'line-through';
// 		console.log('event in li');
// 		e.stopPropagation(); // prevents the event bubbling
// 		e.target.remove();
// 	});
// });

ul.addEventListener('click', (e) => {
	// console.log('event in ul');

	// EVENT DELIGATION
	// console.log(e);
	if (e.target.tagName === 'LI') e.target.remove();
});
