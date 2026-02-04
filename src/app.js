const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware first
app.use(cors());
app.use(express.json());

// Health check before DB connection
app.get('/', (req, res) => {
  res.send('Electrical Quotation System API is running');
});

// Database connection (async, non-blocking)
const connectDB = require('./config/db');
connectDB().catch(err => {
  console.error('Database connection failed during startup');
  console.error(err.message);
});

// Routes
const authRoutes = require('./routes/auth.routes');
const itemRoutes = require('./routes/item.routes');
const userRoutes = require('./routes/user.routes');
const quotationRoutes = require('./routes/quotation.routes');

app.use('/api/auth', authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/quotations", quotationRoutes);

module.exports = app;
