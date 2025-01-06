const url =require('url');
const myurl=new URL('http://mywebsite.com/hello.html?id=100&status=active');
//serialised url
console.log(myurl.href);
console.log(myurl.toString());
//host (root domain)
console.log(myurl.host);
//host name
console.log(myurl.hostname);
//path name
console.log(myurl.pathname);
//serialized query
console.log(myurl.search);
//params
console.log(myurl.searchParams);
//add params
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);
//loop through params
myurl.searchParams.forEach((value,name)=>
    console.log(`${name}:${value}`));