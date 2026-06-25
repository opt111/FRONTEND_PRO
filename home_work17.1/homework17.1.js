class Calculator {
  add(x, y) {
    if (!isNaN(Number(x)) && !isNaN(Number(y))) {
      return Number(x) + Number(y)
    } else {
      console.log('Введіть число')
    }
  }
  subtract(x, y) {
    if (!isNaN(Number(x)) && !isNaN(Number(y))) {
      return Number(x) - Number(y)
    } else {
      console.log('Введіть число')
    }
  }
  multiply(x, y) {
    if (!isNaN(Number(x)) && !isNaN(Number(y))) {
      return Number(x) * Number(y)
    } else {
      console.log('Введіть число')
    }
  }
  divide(x, y) {
    if (!isNaN(Number(x)) && !isNaN(Number(y))) {
      return Number(x) / Number(y)
    } else {
      console.log('Введіть число')
    }
  }
}

const calc = new Calculator();
console.log(calc.add('5', 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4