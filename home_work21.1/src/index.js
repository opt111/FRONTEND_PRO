const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const error = document.querySelector('#error');
const counter = document.querySelector('#counter');
const clearButton = document.querySelector('#clear');

let tasks = JSON.parse(localStorage.getItem('babel-todos') || '[]');

const saveTasks = () => localStorage.setItem('babel-todos', JSON.stringify(tasks));

const render = () => {
  list.innerHTML = '';
  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.className = task.done ? 'done' : '';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => {
      tasks = tasks.map((current) => current.id === task.id ? { ...current, done: !current.done } : current);
      saveTasks(); render();
    });
    const text = document.createElement('span'); text.textContent = task.text;
    const remove = document.createElement('button'); remove.textContent = '×'; remove.className = 'delete'; remove.setAttribute('aria-label', 'Видалити завдання');
    remove.addEventListener('click', () => { tasks = tasks.filter((current) => current.id !== task.id); saveTasks(); render(); });
    item.append(checkbox, text, remove); list.append(item);
  });
  counter.textContent = `Завдань: ${tasks.length}`;
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); const text = input.value.trim();
  if (!text) { error.textContent = 'Введіть текст завдання.'; return; }
  tasks = [...tasks, { id: Date.now(), text, done: false }]; saveTasks(); input.value = ''; error.textContent = ''; render();
});
clearButton.addEventListener('click', () => { tasks = []; saveTasks(); render(); });
render();
