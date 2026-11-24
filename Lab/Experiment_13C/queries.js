// Sections 10 and 11 - query operators, sorting, limiting, projection
// Run: node queries.js  (inserts sample data first)
const { connectDB, disconnectDB } = require('./config/db');
const Student = require('./models/studentModel');

async function main() {
  await connectDB();

  // Start from a clean collection with sample data
  await Student.deleteMany({});
  await Student.insertMany([
    { name: "Alice", age: 22, course: "CS", marks: 88 },
    { name: "Bob",   age: 23, course: "IT", marks: 45 },
    { name: "Carol", age: 21, course: "CS", marks: 76 },
    { name: "David", age: 24, course: "ME", marks: 91 },
    { name: "Eva",   age: 22, course: "IT", marks: 67 },
    { name: "Farah", age: 23, course: "CS", marks: 72 },
    { name: "Gita",  age: 21, course: "ECE", marks: 83 }
  ]);

  // ---- Section 10: operators and filters ----
  // Greater than
  console.log('marks > 80:', await Student.find({ marks: { $gt: 80 } }));

  // AND condition
  console.log('CS and marks >= 75:',
    await Student.find({ course: "CS", marks: { $gte: 75 } }));

  // OR condition
  console.log('IT or marks < 50:',
    await Student.find({ $or: [{ course: "IT" }, { marks: { $lt: 50 } }] }));

  // ---- Section 11: sorting, limiting, projection ----
  // Sorting (descending)
  console.log('sorted by marks desc:', await Student.find().sort({ marks: -1 }));

  // Limiting (top 5)
  console.log('top 5:', await Student.find().sort({ marks: -1 }).limit(5));

  // Projection (only name and course, hide _id)
  console.log('names only:', await Student.find({}, { name: 1, course: 1, _id: 0 }));

  await disconnectDB();
}

main().catch(err => { console.error(err); process.exit(1); });
