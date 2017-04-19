/**
 * Created by Avinash Theppala on 4/17/2017.
 */
var express = require("express");
var app = express();

app.use(express.static('public'));
app.listen(5000, function () {
    console.log('express is on 5000')
});