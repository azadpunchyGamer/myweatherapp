  
const http = require('http');

const server = http.createServer((req,res)=>{
  if (req.url == '/') {
    res.end("Hello World");
  };
  
});
server.listen(8005,"127.0.2.1");
