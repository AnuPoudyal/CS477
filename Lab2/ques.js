const http = require("http");
const fs = require("fs");
const server = http.createServer();
const path = require("path");

server.on("request", (req, res) => {
  if (req.method === "GET" && req.url ==='/') {
    res.write("I'm learning NodeJS");
  } else if (req.method === "POST" && req.url ==='/') {
    const writable = fs.createWriteStream(path.join(__dirname, "/text.txt"));
    writable.write("Practicing fs");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("server started at port 3000");
});





