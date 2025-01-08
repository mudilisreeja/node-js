const http=require('http');
const path=require('path');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log(req.url);
});
const PORT=process.env.port||5000;
server.listen(5000,()=>console.log(`server running on port${PORT}`));

