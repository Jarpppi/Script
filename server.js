const express = require('express');
const date = require(__dirname+'/GetDate.js');
const errorRoutes = require('./routes/errorRoute')

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); //get data from request body
app.use(express.static('public'));

app.use(mainRoutes);
app.use(errorRoutes);

port = 3000;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}.`);
});

