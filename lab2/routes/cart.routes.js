const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.render('cart.ejs');
});

router.post('/add/:id([0-9]{1,10})', function (req, res) {
    let imeProizvoda = parseInt(req.params.id);

    if(req.session.cart === undefined) {
        req.session.cart = {};
    }

    if(req.session.cart[imeProizvoda]) {
        req.session.cart[imeProizvoda]++;
    } else {
        req.session.cart[imeProizvoda] = 1;
    }

    return res.sendStatus(204);
});

router.post('/remove/:id([0-9]{1,10})', function (req, res) {
    let imeProizvoda = parseInt(req.params.id);

    if(req.session.cart === undefined) {
        req.session.cart = {};
    }

    if(req.session.cart[imeProizvoda] > 0){
        req.session.cart[imeProizvoda]--;
        if(req.session.cart[imeProizvoda] === 0){
            delete req.session.cart[imeProizvoda];
        }
    }

    return res.sendStatus(204);
});

router.get('/getAll', function (req, res, next) {
    if(req.session.cart === undefined) {
        req.session.cart = {};
    }

    res.json(req.session.cart);
});

module.exports = router;
