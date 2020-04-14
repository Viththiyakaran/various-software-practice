const http = require('http');

http.createServer((req , res ) =>{

     res.writeHead(200,{
         'Content-Type' : 'text/plain'
     });

     res.write('Hello world ',(err)=>{
        if(!err)
         console.log("Working");
        else 
         console.log('Not working');
     });

     res.end();
     
}).listen(8080);


