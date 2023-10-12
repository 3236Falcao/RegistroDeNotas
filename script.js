let students = [];

function addStudent() {
    const name = document.getElementById('studentName').value;
    const grade1 = parseFloat(document.getElementById('studentGrade1').value);
    const grade2 = parseFloat(document.getElementById('studentGrade2').value);
    const grade3 = parseFloat(document.getElementById('studentGrade3').value);

    if (name && !isNaN(grade1) && !isNaN(grade2) && !isNaN(grade3)) {
        const existingStudent = students.find(student => student.name === name);

        if (existingStudent) {
            alert('Já existe um aluno com esse nome.');
        } else {
            students.push({ name, grades: [grade1, grade2, grade3] });
            updateStudentList();
            document.getElementById('studentName').value = '';
            document.getElementById('studentGrade1').value = '';
            document.getElementById('studentGrade2').value = '';
            document.getElementById('studentGrade3').value = '';
        }
    } else {
        alert('Por favor, insira um nome de aluno e três notas válidas.');
    }
}

function calculateAverage(grades) {
    const total = grades.reduce((acc, grade) => acc + grade, 0);
    return total / grades.length;
}

function updateStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        const average = calculateAverage(student.grades);
        li.textContent = `Nome: ${student.name}, Notas: ${student.grades.join(', ')}, Média: ${average.toFixed(2)}`;
        studentList.appendChild(li);
    });
}
