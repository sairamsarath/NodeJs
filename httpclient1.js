                                                                      // core http core module creation
																	  
const http = require("http")
const url = "http://www.celiacdiseaseindia.com"
http.get(url,(response)=>{
     
	let buf =""	                                                             //with using Buffer
       response.on("data",(chunk)=>{     
	 buf +=chunk.toString()
	
	 })
response.on("end",()=>{
	 console.log("Buffer Contents : "+buf)
     console.log("End of reponse from Server")
})
}).on("error",(err)=>{
console.err(err.message())
})	
																	  