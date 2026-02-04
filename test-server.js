console.log('🚀 Starting minimal test server...');
console.log(`📍 Node.js version: ${process.version}`);
console.log(`📍 Platform: ${process.platform}`);

try {
  console.log('📦 Loading dependencies...');
  const express = require('express');
  console.log('✅ Express loaded');
  
  console.log('🏗️  Creating Express app...');
  const app = express();
  console.log('✅ Express app created');
  
  const PORT = process.env.PORT || 5000;
  console.log(`📍 Port: ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  console.log('🛣️  Setting up routes...');
  app.get('/', (req, res) => {
    res.send('Minimal test server is running!');
  });
  
  console.log(`🚀 Starting server on 0.0.0.0:${PORT}...`);
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Minimal server running on port ${PORT}`);
    console.log(`🌐 Server bound to 0.0.0.0:${PORT}`);
    console.log('🎉 Server started successfully!');
  });
  
  server.on('error', (err) => {
    console.error('❌ Server error:', err.message);
    process.exit(1);
  });
  
} catch (error) {
  console.error('❌ Minimal server startup failed:');
  console.error('Error:', error.message);
  console.error('Stack:', error.stack);
  process.exit(1);
}
