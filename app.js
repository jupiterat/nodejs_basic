const express = require('express');
const path = require('path');

const app = express()
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shoppingRoutes = require('./routes/shop')



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);

app.use(shoppingRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});




app.listen(3000);

