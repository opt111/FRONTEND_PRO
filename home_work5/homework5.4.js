const num = prompt('Введіть ціле число')

for(let i = 2; i < num-1; i++) {
  if(num % i === 0){
    console.log('Не просте число')
    break
  }else {
    console.log('просте число')
  }
}
