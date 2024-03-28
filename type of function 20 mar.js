function createPerson(firstName, lastName) { 
    return { 
        firstName: firstName, 
        lastName: lastName, 
        getFullName() { 
            return firstName + ' ' + lastName; 
        } 
    } 
} 
let name = createPerson('This is a', 'named function!'); 
  
console.log(name.getFullName()); 



()=> { 
    console.log("hey");
} 

var wel = function () { 
    return "hey";
}
var myname="jaikanth";

function display(myname, wel){
    console.log(wel()+' '+myname);
}
display(myname,wel);


(function IIFE(){
    console.log("IIFE SUCCESS");
}
)

function myFirst() {
    let value = 1;

doSomething(() => {
  value = 2;
});
    
console.log(value);
}