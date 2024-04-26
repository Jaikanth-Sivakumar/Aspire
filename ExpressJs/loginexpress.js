var express = require('express');

var server = express();

server.get("/", (request, response) => {
    var username = request.query['uname'];
    var password = request.query['pass'];

    var alertScript = "<script>alert('Username: " + username + "\\nPassword: " + password + "')</script>";
    response.send(alertScript);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
