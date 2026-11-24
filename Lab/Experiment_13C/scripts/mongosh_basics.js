// Section 2 - documents and collections in mongosh.
//   mongosh --file scripts/mongosh_basics.js
use("schoolDB");

db.students.insertOne({
  name: "Alice",
  age: 25,
  skills: ["JavaScript", "Node.js"],
  address: { city: "Dehradun", country: "India" }
});

printjson(db.students.find().toArray());
