const express = require('express');

const path = require('path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    
    res.render('add-product', {prods: products, pageName: 'Add Product'})
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

// /admin/add-product => POST

router.post('/add-product', (req, res) => {
    products.push({title: req.body.title, pageName: 'Add Producs'})
    res.redirect('/');
});

exports.routes = router;
exports.products = products;

//module.exports = router;