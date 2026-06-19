const input = document.querySelector('.form__input');
const addButton = document.querySelector('.form__btn');
const list = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
addButton.addEventListener('click', addNewLi)

function addNewLi() {
  if (input.value.trim() === '') {
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: input.value,
    done: false
  }

  todos.push(newTodo);

  localStorage.setItem('todos', JSON.stringify(todos));

  render()
}

function render() {
  list.innerHTML = '';
  todos.forEach(todo => {
    const newLi = document.createElement("li")
    newLi.classList.add('todo-item')

    const text = document.createElement('span')
    text.innerHTML = todo.text
    text.classList.add('todo-item__description')

    const delbtn = document.createElement('button')
    delbtn.innerHTML = "Видалити"
    delbtn.classList.add('delbtn')


    delbtn.addEventListener('click', () => {
      todos = todos.filter(item => item.id !== todo.id);
      localStorage.setItem('todos', JSON.stringify(todos));
      render();
    })

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    if (todo.done) {
      checkbox.checked = true;
      text.classList.add('done');
    }
    
    checkbox.addEventListener('change', () => {
      text.classList.toggle('done');
      todo.done = checkbox.checked;
      localStorage.setItem('todos', JSON.stringify(todos));
    });

    list.appendChild(newLi)
    newLi.appendChild(text)
    newLi.appendChild(delbtn)
    newLi.prepend(checkbox)


  });
  input.value = ''

}

render()