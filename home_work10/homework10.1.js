let company = {
  sales:
    [{ name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }],

  development: {
    web:
      [{ name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 3801 }],

    internals:
      [{ name: 'Jack', salary: 380 }]
  }
};

function countSalary(department) {
  if(Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  }

  let sum = 0;

  for(let subDep of Object.values(department)) {
    sum += countSalary(subDep);
  }

  return sum
}

console.log(countSalary(company))