const array = [0, '8', true, false, 5, 20, 30]

function averageNum() {

  let result = 0;
  for (let a of array) {
    if (typeof(a) === 'number') {
      result = result + a;
    }

  }
  console.log(result)

}

averageNum()