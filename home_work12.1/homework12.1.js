const button1 = document.getElementById(1)
const button2 = document.getElementById(2)
let link = '';

button1.addEventListener("click", () => {
  return link = prompt("Введіть посилання на сайт");
})

button2.addEventListener("click", () => {
  if (typeof link === 'null' || link.length === 0) {
    alert('Щось пішло не так, спробуйте ще раз')
  } else {
    window.open(link)
  }
})