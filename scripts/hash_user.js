require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../src/models/user');

const username = process.argv[2];
if (!username) {
  console.error('Usage: node scripts/hash_user.js <username>');
  process.exit(1);
}

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI not set in .env');
    process.exit(2);
  }

  await mongoose.connect(process.env.MONGO_URI);

  const user = await User.findOne({ username });
  if (!user) {
    console.error('User not found:', username);
    await mongoose.disconnect();
    process.exit(3);
  }

  if (typeof user.password === 'string' && user.password.startsWith('$2')) {
    console.log('Password already hashed for:', username);
    await mongoose.disconnect();
    process.exit(0);
  }

  const hashed = await bcrypt.hash(user.password, 10);
  user.password = hashed;
  await user.save();
  console.log('Hashed password for:', username);

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err.message || err);
  process.exit(4);
});
