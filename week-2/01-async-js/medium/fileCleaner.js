const fs = require("fs");


fs.readFile("data.txt", "utf-8", function(err, data){
    if(err){
        console.log(err);
        return;
    }

    console.log(data);
    let newData = data.replace(/\s+/g, " ").trim();

    fs.writeFile("data.txt", newData, "utf-8", function(err){
        if(err){
            console.log(err);
            return;
        }
    
        console.log("File written successfully");
    })

    fs.readFile("data.txt", "utf-8", function(err, data){
        if(err){
            console.log(err);
            return;
        }

        console.log(data);
    })
  
})




