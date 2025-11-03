const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Vignan Institute of Technology and Science API');
});

// Define Routes
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api/contacts', require('./routes/api/contacts'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
