const http=require('http');
const path=require('path');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.writeHead(200,{'content-Type':'test/html'});
        res.end('<h1> home </h1>');
    }
        
});
const PORT=process.env.port||5000;
server.listen(5000,()=>
console.log(`server running on ${PORT}`));