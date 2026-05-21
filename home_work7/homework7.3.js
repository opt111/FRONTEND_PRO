function removeElement(array, item) {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let num = +prompt('Введіть число яке видалити')

  let result = [];

  for (let elem of array) {
    if (elem !== num) {
      result.push(elem)
    }
  }
  console.log(result)

}

removeElement()