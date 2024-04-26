var fs=require('fs');

var data="this text will be writed in a text file";

console.log("File Write starts here");

fs.writeFile('text.txt',data,()=>{
    console.log("File write completed");
})

console.log("program ends here");