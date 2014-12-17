
 // HTTPS
 var https = require('https');
 var fs = require('fs');

 // read in the private key and certificate
 var pk = fs.readFileSync('./my.key');
 var pc = fs.readFileSync('./my.crt');
 var opts = { key: pk, cert: pc };

 // create the secure server
 var serv = https.createServer(opts, function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello\n');
 });

 // listen on port 443
 serv.listen(443, function(){
   console.log('listening at http://127.0.0.1:443/');
 });
