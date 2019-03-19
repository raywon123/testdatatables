var express = require('express');
var app = express();

app.use(express.static('public'));
console.log("server is up at http://localhost:3000");
app.listen(3000);