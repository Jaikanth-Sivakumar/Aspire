var http=require('http');

var server=http.createServer((request,response)=>{
    if(request.url=="/"){
        response.write("<h1>welcome to demo</h1>");
    }
    else if(request.url=="/home"){
        response.write("<h1>landing on home</h1>");
    }
    
})
server.listen(3000,()=>{
    console.log("server starts at port 3000");
})

