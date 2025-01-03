const fs=require('fs');
const path=require('path');
fs.appendFile(path.join(__dirname,'/test1','1.txt'),
"i love Node.js",
err=>{
    if(err)throw err;
    console.log("added another line");
}

);