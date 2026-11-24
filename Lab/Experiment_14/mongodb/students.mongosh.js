// MongoDB equivalent of the PostgreSQL lab.
// Run: mongosh --file mongodb/students.mongosh.js
use("student_management");

// Insert 3 documents
db.students.insertMany([
  { name: "Alice Sharma", branch: "CSE", email: "alice@example.com", enrollment_date: new Date("2024-01-15") },
  { name: "Bilal Khan",   branch: "ECE", email: "bilal@example.com", enrollment_date: new Date("2023-08-10") },
  { name: "Carla Gomez",  branch: "CSE", email: "carla@example.com", enrollment_date: new Date("2024-03-02") }
]);

// Query: students in CSE
print("CSE students:");
printjson(db.students.find({ branch: "CSE" }).toArray());

// Query: enrolled after Jan 2024
print("Enrolled after Jan 2024:");
printjson(db.students.find({ enrollment_date: { $gt: new Date("2024-01-31") } }).toArray());

// Update
db.students.updateOne({ email: "bilal@example.com" }, { $set: { branch: "AI/ML" } });

// Delete
db.students.deleteOne({ email: "carla@example.com" });

print("Final collection:");
printjson(db.students.find().toArray());
