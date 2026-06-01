const button = document.querySelector('button')
const text = document.querySelector('p');
button.addEventListener("click", () => {
 text.classList.toggle('color');
})