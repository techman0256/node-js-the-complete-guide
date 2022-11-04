const express = require('express');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {docTitle: 'Shop', prods: products, pageName: 'Shop'});
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;