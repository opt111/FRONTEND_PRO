$(function () {
  const modal = new bootstrap.Modal('#todoModal');
  const tasks = JSON.parse(localStorage.getItem('jquery-todos') || '[]');

  function render() {
    $('#todo-list').empty();
    tasks.forEach((task, index) => {
      $('<li>', { class: 'list-group-item d-flex justify-content-between align-items-center todo-item', text: task })
        .append($('<button>', { class: 'btn btn-sm btn-outline-danger', text: 'Видалити' }).on('click', (event) => {
          event.stopPropagation(); tasks.splice(index, 1); save(); render();
        }))
        .on('click', () => { $('#modalText').text(task); modal.show(); })
        .appendTo('#todo-list');
    });
  }
  function save() { localStorage.setItem('jquery-todos', JSON.stringify(tasks)); }
  $('#todo-form').on('submit', (event) => {
    event.preventDefault(); const value = $('#todo-input').val().trim();
    if (!value) return $('#error').text('Введіть текст завдання.');
    tasks.push(value); save(); render(); $('#todo-input').val(''); $('#error').empty();
  });
  render();
});
