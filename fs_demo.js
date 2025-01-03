const fs=require('fs');
const path=require('path');
//create a folder
fs.mkdir(path.join(__dirname,'/test1'),
{},err=>{
    if(err)throw err;
    console.log('Folder created');

});

//create a file
fs.writeFile(path.join(__dirname,'/test2','1.txt'),
 "hello world",
{},err=>{
    if(err)throw err;
    console.log('File written to...');

});