const http=require('http');
const dt=require('./module1.js');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The current date and time is:"+dt.myDateTime());
    res.end();
});
const port=process.env.port||5000;
server.listen(5000,()=>console.log(`server running on${port}`));