const fs = require('fs');

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

let a = 1
for(let i = 1; i <= 10000000; i++){
    a = a + i;
}
console.log(a);

setTimeout(() => {
    console.log("Hi there!");
}, 5000)