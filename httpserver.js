const http = require("http")
var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
	res.write("Hello to NodeJS App")
	res.end()
})
server.listen(3000);
