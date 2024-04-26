var fs=require("fs");

fs.readFile('text.txt',(err,data)=>{
    if(err){
        return console.error("Error in reading file");
    }
    else{
        console.log(data.toString());
    }
});