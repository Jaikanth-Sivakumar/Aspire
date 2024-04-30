function AsyncOperation(callback){
  console.log("Start of Operation");
  setTimeout(function(){
    callback();
  },1000);
  console.log("End of Opearation"); 
}

function callback(){
  console.log("callback executed");
}

AsyncOperation(callback);