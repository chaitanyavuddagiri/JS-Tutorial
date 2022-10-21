// copy event
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
	console.log('OI! my content is copyright');
});

// mouse move event
const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
	// console.log(e.offsetX, e.offsetY);
	box.textContent = `x pos = ${e.offsetX}  y pos = ${e.offsetY}`;
});

// scroll event
document.addEventListener('wheel', (e) => {
	console.log(e.pageX, e.pageY);
});
