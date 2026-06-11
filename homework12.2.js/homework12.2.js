const buttons = document.querySelectorAll("button")

buttons.forEach(function (button) {
  button.addEventListener("click", () => {
    alert(`Клікнуто на кнопці: ${button.id}`)
  })
})