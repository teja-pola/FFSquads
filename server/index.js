const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const teamRoutes = require('./routes/teamRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json()); // To handle JSON data

// Routes
app.use('/api/teams', teamRoutes);
const paymentRoutes = require('./routes/paymentRoutes.js');
app.use('/api/payment', paymentRoutes);


// MongoDB connection
mongoose.connect('mongodb+srv://tejapola:PDTpdt%40123@ffsquads.wxuia.mongodb.net/FFSquads?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Replace with your own HTML or template rendering logic
});


