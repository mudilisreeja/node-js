const fs=require('fs')
const path=require('path')
//read a file
fs.readFile(path.join(__dirname,'/test1','1.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});
//rename file
fs.rename(path.join(__dirname,'/test1','hello.txt'),
path.join(__dirname,'/test1','hii.txt'),
err=>{
    if(err)throw err;
    console.log("file renamed...")
});





