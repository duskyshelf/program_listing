var express = require("express");
var app = express();

app.use(express.static("/"));

app.get('/', function(request, response) {
    response.sendFile('./index.html');
});

app.get('/#/:letter/:page', functon(request, response){
    response.sendFile('./index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Listening on port 3000");
});