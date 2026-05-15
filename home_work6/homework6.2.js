let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(Math.floor(Math.random() * 10) + 1);
}
let arr1 = arr.join('; ');

console.log(`Оригінальний масив: ${arr1}`);

let newArr = []
for (const num of arr) {
  if (num % 2 === 0) {
    newArr.push(num);

  }

}

let arr2 = newArr.join('; ')

console.log(`Масив з парними числами: ${arr2}`);
