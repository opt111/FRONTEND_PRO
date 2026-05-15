let n = prompt('Введіть квадрат')

for (i = 1; i <= 100; i++) {
  if ((i ** 2) < n) {
    console.log(i);
  }
}