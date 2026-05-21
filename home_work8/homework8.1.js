function Counter() {
  let result = 0
  return function (num) {
    return result += num;
  }
}
const sum = Counter();



console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));