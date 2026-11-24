// Section 5 - connecting MongoDB to Node.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
  .then(() => { console.log('MongoDB Connected'); return mongoose.disconnect(); })
  .catch(err => console.log('Connection error:', err));

// Atlas (cloud):
// mongoose.connect('mongodb+srv://user:password@cluster0.mongodb.net/schoolDB');
