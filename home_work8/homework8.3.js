

function myFunc() {
  let num

  for (let i = 1; i <= 10; i++) {
    num = +prompt('Введіть число');
    if (num <= 100) {
      alert('Число меньше 100. Спробуйте ще раз')
    } else {
      return alert(`Останнє введене число: ${num}`)
    }
  }
  alert(`Останнє введене число: ${num}`)



}
console.log(myFunc())