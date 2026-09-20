const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students → all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id → one student
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "ID must be a number" });

  const student = students.find((s) => s.id === id);
  if (!student) return res.status(404).json({ error: "Student not found" });

  res.status(200).json(student);
});

// POST /students → add a student
router.post("/", (req, res) => {
  const { name, course } = req.body || {};
  if (!name || !course) {
    return res.status(400).json({ error: "Name and course are required" });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id → update a student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "ID must be a number" });

  const student = students.find((s) => s.id === id);
  if (!student) return res.status(404).json({ error: "Student not found" });

  const { name, course } = req.body || {};
  if (!name || !course) {
    return res.status(400).json({ error: "Name and course are required" });
  }

  student.name = name;
  student.course = course;
  res.status(200).json(student);
});

// DELETE /students/:id → remove a student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "ID must be a number" });

  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ error: "Student not found" });

  const deleted = students.splice(index, 1);
  res.status(200).json({ message: "Student deleted", student: deleted[0] });
});

module.exports = router;