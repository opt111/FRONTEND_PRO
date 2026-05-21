function delSymb(input, symbols) {
  input = prompt('Введіть рядок').toLowerCase().split('');
  symbols = prompt('Введіть символи').toLowerCase().split('');

  console.log(`Введений рядок: ${input.join('')}`)
  console.log(`Символи які потрібно видалити: ${symbols}`)

  let result = [];

  for (let i of input) {
    if (!symbols.includes(i)) {
      result.push(i);
    }
  }

  console.log(`Result: ${result.join('')}`)
}

delSymb()