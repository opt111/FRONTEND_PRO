// в циклі створювати локумент креат елемент створювати трку і вкладеним створювати тдшку
const table = document.querySelector('table');

for (let i = 1; i <= 10; i++) {
  const newTr = document.createElement('tr')


  for (let j = 1; j <= 10; j++) {
    const newTd = document.createElement('td')


    newTd.textContent = j * i
    newTr.appendChild(newTd)


  }
  table.appendChild(newTr)

}