require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

connectDB()

app.use(cookieParser);

app.use(cors(corsOptions));

app.use('/', express.static(path.join(__dirname, '..' ,'frontend/speed-app/public')));

app.use('/', require('./routes/root'));

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, '..', 'frontend/speed-app/public/views', '404.html'));
    }else if (req.accepts('json')){
        res.json({message: '404 Not Found'});
    }else{
        res.type('txt').send('404 Not Found');
    }
});

mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
});