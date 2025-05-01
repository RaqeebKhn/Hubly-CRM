require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');

const app = express();


connectDB();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});


app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);


const PORT = 5000;  
app.listen(PORT, '0.0.0.0', () => {    
    console.log(`Server is running on port ${PORT}`);
});