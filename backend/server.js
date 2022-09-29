const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});