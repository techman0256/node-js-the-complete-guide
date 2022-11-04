const express = require('express');

// Why this would require ?
const bodyParser = require('body-parser');

// You should explore more about path module
const app = express();
const path = require('path');

//
app.set('view engine', 'pug');
 

const shopRoutes = require('./routes/shop');
const adminData = require('./routes/admin');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname)));

app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use((req, res, next) => {
    res.status(404).render('404', {request: req, pageName: 'Oops !!'});
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3300)