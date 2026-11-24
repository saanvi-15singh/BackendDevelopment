// Section 8 - safe connection handling
const mongoose = require('mongoose');

const DB_URL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/schoolDB';
// Atlas example: 'mongodb+srv://user:password@cluster0.mongodb.net/schoolDB'

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Connection error:', error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await mongoose.disconnect();
  console.log('Database disconnected');
};

// On Ctrl+C close the connection cleanly
process.on('SIGINT', async () => {
  await disconnectDB();
  process.exit(0);
});

module.exports = { connectDB, disconnectDB };
