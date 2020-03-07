const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//업로드 path 추가
app.use('/uploads', express.static('uploads'));

// 템플릿 변수
app.use( (req, res, next) => {
    app.locals.isLogin = true;
    app.locals.req_path = req.path;
    next();
});

app.get('/', (req,res) => {
    res.send('express start');
});

// Routing
app.use('/admin', admin);

// 404
app.use( ( req , res, _ ) => {
    res.status(404).render('common/404.html')
});

// 500
app.use( (err, req, res,  _ ) => {
    res.status(500).render('common/500.html')
});
 
app.listen( port, () => {
    console.log('Express listening on port', port);
});