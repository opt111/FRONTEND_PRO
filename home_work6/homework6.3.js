const users = [
  {
    name: 'Петро',
    phone: '+38094123213',
    email: 'petro@gmail.com'
  },

  {
    name: 'Іван',
    phone: '+38094312413',
    email: 'ivan@gmail.com'
  },

  {
    name: 'Марія',
    phone: '+38093214213',
    email: 'mariia@gmail.com'
  }
]



const newUsers = users.unshift({
  name: 'Андрій',
  phone: '+38093543213',
  email: 'andrij@gmail.com'
}) 

const userNameToFind = 'Марія';
const foundUser = users.find(user => user.name === userNameToFind);

console.log(users)
console.log(foundUser)