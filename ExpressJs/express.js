var express=require('express');

var server=express();

server.get("/",(request,response)=>{
    response.sendfile(__dirname, "index.html")
})

server.get("/redirect",(request,response)=>{
    response.redirect("https://google.com")
})

server.get("/signin",(request,response)=>{
    var username=request.query['uname'];
    response.send("<h1> welcome "+username+"</h1>")
})


server.get("/home",(request,response)=>{
    response.send("<h1>landing on home page</h1>")
})


server.get("/payment/:option",(request,response)=>{
    var paymentoption=request.params['option'];
    if(paymentoption=='debit'){
        response.send("<h1>debit")
    }
    
})


server.listen(5000,()=>{
    console.log("express server is waiting for client connections")
})