require('dotenv').config();
const mongoose = require('mongoose');

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI not set in .env');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection.db;
  console.log('Connected DB name:', db.databaseName);

  const collections = await db.listCollections().toArray();
  console.log('Collections:', collections.map(c => c.name));

  const tryNames = ['users', 'user', 'Users', 'User'];
  for (const name of tryNames) {
    const found = collections.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (found) {
      console.log(`\nSample document from collection '${found.name}':`);
      const doc = await db.collection(found.name).findOne({});
      console.log(doc);
    } else {
      console.log(`\nCollection not found: ${name}`);
    }
  }

  await mongoose.disconnect();
}

main().catch(err => {
  console.error(err.message || err);
  process.exit(2);
});
