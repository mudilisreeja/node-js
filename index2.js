const logger=require('./logger');
const logger1=new logger();
logger1.on('message',data=>console.log("called listener",data));

logger1.log("hello world");
logger1.log("hello...");
logger1.log("hiii world");