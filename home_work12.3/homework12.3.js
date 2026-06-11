const list = document.getElementById("list");
const btn = document.getElementById('btn');
const input = document.getElementById('input');


btn.addEventListener('click', () => {
  if (input.value.length === 0) {
    alert("Поле вводу пусте")
  } else {
    const li = document.createElement("li")
    const newBtn = document.createElement("button")

    li.innerHTML = input.value;
    newBtn.innerHTML = 'Видалити'

    list.appendChild(li)
    li.appendChild(newBtn)

    newBtn.addEventListener("click", () => {
      li.remove()
    })

    input.value = '';
  }
})

