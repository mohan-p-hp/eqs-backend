require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/user');
const bcrypt = require('bcrypt');

const username = process.argv[2] || 'mohan';
const password = process.argv[3] || '1234';

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI not set in .env');
    process.exit(2);
  }

  await mongoose.connect(process.env.MONGO_URI);

  const user = await User.findOne({ username }).lean();
  if (!user) {
    console.error(`User not found: ${username}`);
    await mongoose.disconnect();
    process.exit(3);
  }

  console.log('User from DB:', { username: user.username, password: user.password });
  const looksHashed = typeof user.password === 'string' && user.password.startsWith('$2');
  console.log('Looks hashed:', looksHashed);

  try {
    const match = await bcrypt.compare(password, user.password);
    console.log('bcrypt.compare result:', match);
    await mongoose.disconnect();
    process.exit(match ? 0 : 1);
  } catch (err) {
    console.error('Error comparing password:', err.message);
    await mongoose.disconnect();
    process.exit(4);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(5);
});
