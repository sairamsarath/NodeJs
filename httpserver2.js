  const http = require("http")
var server = http.createServer((req,res)=>{
	var str =''
    res.writeHead(200,{'Content-Type':'application/json'})
	/*
	str += "<html><head><title>Node JS App</title></head>"
	str += "<body> Hello to Node Js App</body>"
	str += "</html>"
	*/
	res.write(JSON.stringify({message:'This is my First JSON res'}))
	res.end()
})
var port = 3000
server.listen(port,()=>{
	console.log(`Server is listining at port ${port}`)
});
