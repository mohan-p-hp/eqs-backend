console.log('🚀 Starting minimal test server...');

try {
  const express = require('express');
  console.log('✅ Express loaded');
  
  const app = express();
  console.log('✅ Express app created');
  
  const PORT = process.env.PORT || 5000;
  console.log(`📍 Port: ${PORT}`);
  
  app.get('/', (req, res) => {
    res.send('Minimal test server is running!');
  });
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Minimal server running on port ${PORT}`);
    console.log(`🌐 Server bound to 0.0.0.0:${PORT}`);
  });
  
} catch (error) {
  console.error('❌ Minimal server startup failed:');
  console.error(error.message);
  console.error(error.stack);
  process.exit(1);
}
