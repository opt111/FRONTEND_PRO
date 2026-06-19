const form = document.querySelector('form')



form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
  message = event.target.message.value

  if (message.length > 0) {
    result = `Повідомлення користувача: ${message}`
  } else {
    result = ``
  }
  event.preventDefault();
  console.log(`
    Ім'я користувача: ${event.target.name.value}
    Номер користувача: ${event.target.tel.value},
    Пошта користувача: ${event.target.email.value}
    ${result}
    `)

  this.reset()
}