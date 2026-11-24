// Section 9 - Basic CRUD operations (Create, Read, Update, Delete)
// Run: node crud.js
const { connectDB, disconnectDB } = require('./config/db');
const Student = require('./models/studentModel');

async function main() {
  await connectDB();

  // (1) Create - insert a document
  const newStudent = new Student({
    name: "Alice",
    age: 22,
    course: "B.Tech",
    marks: 88
  });
  await newStudent.save();
  console.log('Student added!');

  // (2) Read - find documents
  const students = await Student.find();
  console.log('All students:', students);

  const result = await Student.findOne({ name: "Alice" });
  console.log('findOne:', result);

  // (3) Update - modify an existing document
  await Student.updateOne({ name: "Alice" }, { $set: { marks: 92 } });
  console.log('Record updated');
  console.log('After update:', await Student.findOne({ name: "Alice" }));

  // (4) Delete - remove a document
  await Student.deleteOne({ name: "Alice" });
  console.log('Record deleted');

  await disconnectDB();
}

main().catch(err => { console.error(err); process.exit(1); });
