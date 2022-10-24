const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
	return `<li
    class="list-group-item d-flex justify-content-between alight-items-center"
>
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
};

addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const todo = addForm.add.value.trim();

	if (todo.length) {
		todos.innerHTML += generateTemplate(todo);
		addForm.reset();
	}
});

//delete todos
todos.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		e.target.parentElement.remove();
	}
});

//search todos
const filterTodos = (term) => {
	Array.from(todos.children)
		.filter((todo) => !todo.textContent.toLowerCase().includes(term))
		.forEach((item) => item.classList.add('filtered'));

	Array.from(todos.children)
		.filter((todo) => todo.textContent.toLowerCase().includes(term))
		.forEach((item) => item.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
	const term = search.value.trim().toLowerCase();
	filterTodos(term);
});
