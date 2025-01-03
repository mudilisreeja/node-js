const fs=require('fs');
const path=require('path');

//create a file
fs.writeFile(path.join(__dirname,'/test1','1.txt'),
 "hello world",
{},err=>{
    if(err)throw err;
    console.log('File written to...');

});