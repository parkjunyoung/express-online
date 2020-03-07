const express = require('express');
const nunjucks = require('nunjucks');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

app.get('/', (req,res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);
 
app.listen( port, () => {
    console.log('Express listening on port', port);
});