var express = require('express');
var app = module.exports = express();

app.use(express["static"](__dirname + "/dist"));

app.use(require('connect-livereload')( {
	port: 9091
}));

if(!module.parent) {
	var port = 3000;
	app.listen(port);
	console.log("Express app started on port " + port);
}
