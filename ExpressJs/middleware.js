var express=require('express');

var server =express();

var passengerName;

// server.use(airportTerminal);
function airportTerminal(request,response,next){
    var proof=request.query['proof'];
    if(proof==='Aadhar')
    next()
    else{
        response.send("<h1>Without valid proof , we are not allowing</h1>")
    }
}

function getPassengerName(request,response,next){

    passengerName=request.query['passenger'];
    if(passengerName.length>=4)
     next()
    else{
        response.send("<h1>Enter Valid Name</h1>");
    }
}

server.get("/targetflight",airportTerminal,getPassengerName,(request,response)=>{

response.send("<h1> welcome " +passengerName+ " !!!.Have a wonderful journey</h1>")

})

server.get("/viptargetflight",(request,response)=>{

response.send("<h1> welcome " +"VIP"+ " !!!.Have a wonderful journey</h1>")

})



server.listen(5000,()=>{
    console.log("express server is waiting for client connections")
})