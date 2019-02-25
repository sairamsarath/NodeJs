const http = require("http")
var server = http.createServer((req,res)=>{
	var str =''
	if(req.url == '/')
	{ 
    res.writeHead(200,{'Content-Type':'text/html'})
	str += "<html><head><title> Home Page</title></head>"
	str += "<body> This is my Home page</body>"
	str += "</html>"
	
	res.write(str)
	res.end()
	}
else if(req.url == '/about')
	{ 
    res.writeHead(200,{'Content-Type':'text/html'})
	str += "<html><head><title>About page</title></head>"
	str += "<body> This is my About Us Page</body>"
	str += "</html>"
	
	res.write(str)
	res.end()
	}
	else if(req.url == '/contact')
	{ 
    res.writeHead(200,{'Content-Type':'text/html'})
	str += "<html><head><title>Contact Us page</title></head>"
	str += "<body> This is my Contact Us Page</body>"
	str += "</html>"
	
	res.write(str)
	res.end()
	}

 else{ 
      res.writeHead(404,{'Content-Type':'text/html'})
	  res.end("Invalid Request")
 }

	
})
var port = 3000
server.listen(port,()=>{
	console.log(`Server is listining at port ${port}`)
});
