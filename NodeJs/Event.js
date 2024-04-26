var event=require('events');

var emitter=new event.EventEmitter();
emitter.on('trackdelivery',()=>{

console.log("order out for delivery")

})


function deliveryStatus(){
    console.log("Please wait for the delivery status. we are loadin");

    console.log("final status");
    emitter.emit('trackdelivery');
}

deliveryStatus()