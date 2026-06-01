const image = document.getElementById('image');

let randomNumber = (Math.floor(Math.random() * 9) + 1 )
console.log(randomNumber)

document.addEventListener('DOMContentLoaded', function () {
  image.setAttribute("src", `images/${randomNumber}.jpg`);
})
