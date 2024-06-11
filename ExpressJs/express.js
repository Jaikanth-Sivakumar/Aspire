var express = require('express');
var server = express();
const port = 5000;

server.get("/", (request, response) => {
    response.sendFile(__dirname + "/login.html");
});

server.get("/redirect", (request, response) => {
    response.redirect("https://google.com");
});

server.get("/signin", (request, response) => {
    var username = request.query['uname'];
    response.send("<h1>Welcome " + username + "</h1>");
});

server.get("/home", (request, response) => {
    response.send("<h1>Landing on home page</h1>");
});

server.get("/payment/:option", (request, response) => {
    var paymentoption = request.params['option'];
    if (paymentoption == 'debit') {
        response.send("<h1>Debit</h1>");
    }
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
