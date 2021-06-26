const http = require("http");
const fs = require("fs");
const url= require("url");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url==="/users") {
   const stream=fs.fs.createReadstream("/users.txt");
   stream.pipe(res);
    }
    else if(req.method==="POST" && req.url==="/users"){

        req.on("data",(data)=>{
fs.writeFile("./users.txt",data,(err)=>{
if(err) throw err;

});
res.end();
});
    }
});
server.listen(3000);
