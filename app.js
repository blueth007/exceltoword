const express = require("express")
const app= express();
const fs =require("fs");
var path = require('path');
var indexRouter = require('./routes/index');
var downloadTplRouter = require("./routes/downloadTpl")
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require("ejs").__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
 

app.use('/', indexRouter);
app.use("/downloadTpl",downloadTplRouter)

app.listen(9090);
console.log("Server running....")



