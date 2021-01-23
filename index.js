const http = require('http');

const server = http.createserver(('req,res')=>{
  if (req.url == '/') {
    res.end("Hello World");
  };
  
});
