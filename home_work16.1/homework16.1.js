const marks = [];
for (let i = 0; i < 25; i++) {
  const mark = Math.floor(Math.random() * 100) + 1;

  marks.push(mark)

}

const attendance = []

class Student {
  constructor(name, surname, year, attendance = [], marks = []) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.attendance = attendance;
    this.marks = marks
  }

  present() {
    if (this.attendance.length < 25) {
      return this.attendance.push(true)
    } else {
      console.log('Досягнуто ліміту відвідуваності в 25 занять')
    }
  }

  absent() {
    if (this.attendance.length < 25) {
      return this.attendance.push(false)
    } else {
      console.log('Досягнуто ліміту відвідуваності в 25 занять')
    }
  }

  studentAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;
    console.log(`Вік студента: ${age}`)
  }

  Summary() {
    let sum = 0;
    for (let i = 0; i <= this.marks.length - 1; i++) {
      sum += this.marks[i]
    }
    let averageScore = Math.floor(sum / this.marks.length);
    console.log(`Середній бал студента: ${averageScore}`)

    let sum1 = 0;
    for (let i = 0; i <= this.attendance.length - 1; i++) {
      if (this.attendance[i] === true) {
        sum1 += 1;
      }

    }
    let averageAttendence = sum1 / this.attendance.length;
    console.log(`Відвідуваність студента: ${averageAttendence}`)
    if (averageScore >= 90 && averageAttendence >= 0.9) {
      console.log("Молодець!")
    } else if (averageScore < 90 && averageAttendence < 0.9) {
      console.log("Редиска!")
    } else {
      console.log("Добре, але можна краще ")

    }
  }
}

const Student1 = new Student('Oleh', "Sych", 2003, attendance, marks)

console.log('-----Перевірка Студент 1-----')

const marksStudent1 = Array(25).fill(95);
const attendanceStudent1 = [];

const student1 = new Student('Анна', 'Ковальчук', 2004, attendanceStudent1, marksStudent1);

for (let i = 0; i < 24; i++) {
  student1.present();
}
console.log(student1)
student1.Summary()

console.log('-----Перевірка Студент 2-----')

const marksStudent2 = Array(25).fill(98);
const attendanceStudent2 = [];

const student2 = new Student('Марія', 'Лисенко', 2003, attendanceStudent2, marksStudent2);

for (let i = 0; i < 12; i++) {
  student2.present();
}
for (let i = 0; i < 12; i++) {
  student2.absent();
}

student2.Summary();

console.log('-----Перевірка Студент 3-----')

const marksStudent3 = Array(25).fill(60);
const attendanceStudent3 = [];

const student3 = new Student('Дмитро', 'Павленко', 2005, attendanceStudent3, marksStudent3);

for (let i = 0; i < 20; i++) {
  student3.present();
}

for (let i = 0; i < 4; i++) {
  student3.absent();
}

student3.Summary();