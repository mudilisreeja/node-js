const http=require('http');
const path=require('path');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/api/users'){
        const users=[
            {name:'Bob',age:40},
            {name:'john',age:30}
        ];
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(users));
    }
});
const PORT=process.env.port||5000;
server.listen(5000,()=>console.log(`server running on port${PORT}`));