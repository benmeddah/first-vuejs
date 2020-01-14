var express = require('express');
var app = express();

// Serve all the files in '/dist' directory
app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log("port: "+app.get('port')));