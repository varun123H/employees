var express = require('express');
var employeeController = require('./controllers/employeeControllers');
var app = express();
var exphbs  = require('express-handlebars');
var port = 3000;

app.use('/employee', employeeController)

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(port , ()=>{
    console.log('Server Started on port',3000)
});