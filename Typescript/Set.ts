let studentEntries = new Set();  
   
//Add Values  
studentEntries.add("Jai");  
studentEntries.add("Surya");  
studentEntries.add("Venkat");  
studentEntries.add("Prem");   
studentEntries.add("Arun");   
  
//Returns Set data  
console.log(studentEntries);   
   
//Check value is present or not  
console.log(studentEntries.has("Ja"));        
console.log(studentEntries.has(3));        
   
//returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Arun"));      
   
//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries); 