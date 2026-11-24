// Section 6 - creating an admin user. Run inside mongosh:
//   mongosh
//   load("scripts/mongosh_auth.js")
use("admin");
db.createUser({
  user: "adminUser",
  pwd: "securePassword123",
  roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
});

// Then connect with authentication from the terminal:
//   mongosh -u adminUser -p securePassword123 --authenticationDatabase admin
