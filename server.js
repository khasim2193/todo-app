var express = require('express');
var path = require('path');

//create our app
var app = express();

app.get('/', function(req, resp) {
    resp.sendFile('todo 5.0.html', {root: path.join(__dirname, '')});
})
app.listen(2000, function (){
  console.log('Express server is up on port 2000');
});

