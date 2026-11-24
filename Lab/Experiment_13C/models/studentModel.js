// Section 7 - schema and model
const mongoose = require('mongoose');

// Define schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String,
  marks: Number
});

// Create model (collection name will be "students")
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
