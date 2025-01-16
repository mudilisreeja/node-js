const http=require('http');
const formidable = require('formidable');
const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();

});
const PORT=process.env.port||8081;
server.listen(8081,()=>console.log(`server running on port${PORT}`));