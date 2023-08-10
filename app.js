const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8000;

//Express configurations
// app.use(express.static('static', options));
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/home', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/workout', (req, res)=>{
    const params = {};
    res.status(200).render('workout.pug', params);
})
app.get('/diet', (req, res)=>{
    const params = {};
    res.status(200).render('diet.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});