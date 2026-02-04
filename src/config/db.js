const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI environment variable is missing');
    console.error('Please set MONGO_URI in your environment variables');
    console.log('⚠️  Server will continue running but database features will not work');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed');
    console.error(error.message);
    console.log('⚠️  Server will continue running but database features will not work');
  }
};

module.exports = connectDB;
