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