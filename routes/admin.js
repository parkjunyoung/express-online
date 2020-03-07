const express = require('express');
const router = express.Router();

function testMiddleWare( req, res, next ){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2 , (req,res) => {
    res.send('admin app');
});

router.get('/products', ( _ , res) => {
    res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
});

router.get('/products/write', ( _ , res) => {
    res.render( 'admin/write.html');
});

router.post('/products/write', ( req , res ) => {
    res.send(req.body);
});

module.exports = router;