let n = prompt('print 3 digital number');

let numbers = n.split('').map(Number);

console.log(numbers);

if (numbers[1] === numbers[0] && numbers[2] === numbers[0]) {
  console.log('Всі числа однакові');
} else if (numbers[1] === numbers[0] || numbers[2] === numbers[0]) {
  console.log('Є однакові числа');
} else {
  console.log('Числа різні');
}