function product(x) {
  return function (y) {
    return x * y;
  }
}

console.log(product(4)(5))