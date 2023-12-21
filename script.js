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

function approvedOrDisapproved(average, student) {
  return average >= 7 ? `Parabéns, ${student}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${student}! Tente novamente!`;
};

function printStudentGrade(student) {
  return `
    A média do(a) aluno(a) ${student.name} é: ${average(student.firstNote, student.secondNote)}
    ${approvedOrDisapproved(average(student.firstNote, student.secondNote), student.name)}
  `
};

for(let student of students) {
  let message = printStudentGrade(student);
  alert(message);
};