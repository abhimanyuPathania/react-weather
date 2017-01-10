var express = require('express');
var compression = require('compression');
var favicon = require('serve-favicon');

// Create our app
var app = express();

// compress responses
app.use(compression());

// server favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https'){
		res.redirect('http://' + req.hostname + req.url);	
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port:', PORT);
});
