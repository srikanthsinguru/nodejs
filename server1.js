const http = require('http');
const fs = require('fs');
//const _ = require('lodash');
const server = http.createServer((req , res) =>{
    // res.write('server is running');
    // res.end('stop the server');
    // //req.complete('Server connection complete');
    // console.log('server is created');
    //console.log(req.url , req.method);
    //LODASH
    // const num = _.random(0,30);
    // console.log(num);
    //set header content type
   // res.setHeader('Content-Type' , 'text/plain');
   res.setHeader('Content-Type' , 'text/html');
    //routing
    let path='./html/';
    switch(req.url){
       case '/':
       path += 'about.html';
       res.statusCode = 200;
       break;
       case '/index':
       path += 'index.html';
       res.statusCode = 200;
       break;
       case'/index-sri':
       res.statusCode = 301;
       res.setHeader ('Location' , '/index');
       res.end();
       break;
       default:
       path +='404page.html';
       res.statusCode = 404;
       break;    
    }
    // res.write('<p>code running</p>');
    // res.write('<h2>code running</h2>');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.end();
    //sending HTMl file
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost' , () =>{
    console.log('connected to server on port number 3000');
});