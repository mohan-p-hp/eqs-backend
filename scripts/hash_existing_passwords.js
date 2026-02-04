require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../src/models/user');

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI not set in .env');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);

  const users = await User.find();
  for (const u of users) {
    // skip if already looks like a bcrypt hash
    if (typeof u.password === 'string' && u.password.startsWith('$2')) {
      console.log(`Skipping (already hashed): ${u.username}`);
      continue;
    }

    const hashed = await bcrypt.hash(u.password, 10);
    u.password = hashed;
    await u.save();
    console.log(`Hashed password for: ${u.username}`);
  }

  await mongoose.disconnect();
  console.log('Done');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
