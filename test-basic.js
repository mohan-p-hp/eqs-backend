console.log('Starting basic HTTP server test...');

console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Current directory:', process.cwd());

try {
  console.log('Testing basic require...');
  const http = require('http');
  console.log('http module OK');
  
  console.log('Testing path...');
  const path = require('path');
  console.log('path module OK');
  
  console.log('Testing fs...');
  const fs = require('fs');
  console.log('fs module OK');
  
  console.log('Basic Node.js modules work!');
  
  // Create a simple HTTP server that keeps running
  const PORT = process.env.PORT || 5000;
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Basic HTTP server is running!');
  });
  
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Basic HTTP server running on port ${PORT}`);
    console.log(`Server bound to 0.0.0.0:${PORT}`);
    console.log('Server is alive and will keep running!');
  });
  
  server.on('error', (err) => {
    console.error('Server error:', err.message);
    process.exit(1);
  });
  
} catch (error) {
  console.error('Basic test failed:', error.message);
  console.error(error.stack);
  process.exit(1);
}
