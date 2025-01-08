const http=require('http');
const path=require('path');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/about'){
        fs.readFile(
            path.join(__dirname,'public','about.html'),(err,content)=>{
                if (err)throw err;
                res.writeHead(200,{'content-type':'text/html'})
                res.end(content);
        
            }
   


        );
    }
});
const PORT= process.env.port||5000;
server.listen(5000,()=>console.log(`server running on ${PORT}`));