const students = [
  {
    name: 'João',
    firstNote: 8,
    secondNote: 7
  },
  {
    name: 'Pedro',
    firstNote: 5,
    secondNote: 7
  },
  {
    name: 'Michele',
    firstNote: 9,
    secondNote: 10
  },
  {
    name: 'Zeca',
    firstNote: 5,
    secondNote: 5
  }
];

function average(firstNote, secondNote) {
  return (firstNote + secondNote) / 2;
};

function approvedOrDisapproved(averageStudent, student) {
  return averageStudent >= 7 ? `Parabéns, ${student}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student}! Tente novamente!`;
};

function printStudentGrade(student, averageStudent) {
  return `
    A média do(a) aluno(a) ${student.name} é: ${averageStudent}
    ${approvedOrDisapproved(averageStudent, student.name)}
  `
};

for(const student of students) {
  const averageStudent = average(student.firstNote, student.secondNote);
  const message = printStudentGrade(student, averageStudent);
  alert(message);
};