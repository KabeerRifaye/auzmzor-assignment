var express = require('express'),
    app = express(),
    colors = require('colors'),
    open = require('open'),
    bodyParser = require('body-parser');

var port = process.env.PORT || 3030;

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.listen(port, function(req, res) {
  console.log(colors.green("server listening on port : "+port));
  open(`http://localhost:`+port);
})