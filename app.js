const http = require('http');

http.createServer(function (req, res){
res.write("Beep boop! The system is down.");
res.end();


}
).listen(3000);

console.log("Server started on port 3000");
