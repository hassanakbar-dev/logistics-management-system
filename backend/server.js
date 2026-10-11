require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/db'); // MySQL connection import kiya

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const shipmentRoutes = require('./routes/shipmentRoutes');
app.use('/api/shipments', shipmentRoutes);

// 🛑 NAYA ROUTE ADD KAR DIYA GAYA HAI:
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('MySQL Logistics API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});