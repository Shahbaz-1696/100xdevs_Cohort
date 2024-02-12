const fs = require('fs');


fs.writeFile("a.txt", "Hello World", "utf-8", function(err){
    if(err){
        console.log(err)
        return
    } else {
        console.log("File written successfully");
    }
})

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        console.log(err);
        return;
    } else {
        console.log(data);
    }
})