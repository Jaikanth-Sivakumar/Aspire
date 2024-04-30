var Greet = function () { 
    return "Morning";
}

var name="jaikanth";

function display(Greet, name){
    console.log(Greet()+' '+name);
}
display(Greet,name);