console.log('🔍 Testing dependencies...');

try {
  console.log('Testing express...');
  const express = require('express');
  console.log('✅ Express OK');
  
  console.log('Testing cors...');
  const cors = require('cors');
  console.log('✅ CORS OK');
  
  console.log('Testing dotenv...');
  require('dotenv');
  console.log('✅ Dotenv OK');
  
  console.log('Testing mongoose...');
  const mongoose = require('mongoose');
  console.log('✅ Mongoose OK');
  
  console.log('Testing bcrypt...');
  const bcrypt = require('bcrypt');
  console.log('✅ Bcrypt OK');
  
  console.log('Testing jsonwebtoken...');
  const jwt = require('jsonwebtoken');
  console.log('✅ JWT OK');
  
  console.log('🎉 All dependencies loaded successfully!');
  
} catch (error) {
  console.error('❌ Dependency failed:');
  console.error(error.message);
  console.error(error.stack);
  process.exit(1);
}
