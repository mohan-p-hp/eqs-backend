console.log('🚀 Starting server...');

try {
  const app = require('./src/app');
  
  const PORT = process.env.PORT || 5000;
  console.log(`📍 Port: ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌐 Server bound to 0.0.0.0:${PORT}`);
  });
  
} catch (error) {
  console.error('❌ Server startup failed:');
  console.error(error.message);
  console.error(error.stack);
  process.exit(1);
}
