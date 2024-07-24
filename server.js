const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/auth', authRoutes);
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
