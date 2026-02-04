const itemRoutes = require("./routes/item.routes");
const userRoutes = require("./routes/user.routes");
const quotationRoutes = require("./routes/quotation.routes");


require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/quotations", quotationRoutes);



app.get('/', (req, res) => {
  res.send('Electrical Quotation System API is running');
});

module.exports = app;
