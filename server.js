const express = require('express');
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: 'Lara', course: 'Computer Science' },
  { id: 2, name: 'John', course: 'Information Technology' }
];

app.get('/students', (req, res) => {
  res.status(200).json(students);
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    course: req.body.course
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => console.log('Server running on port 3000'));
