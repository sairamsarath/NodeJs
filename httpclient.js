                                                                      // core http core module creation
																	  
const http = require("http")
const url = "http://www.celiacdiseaseindia.com"
http.get(url,(response)=>{
     response.on("data",(chunk)=>{
		 setTimeout(()=>{                                                            //with using delay or we can do it without delay
         console.log(chunk.toString())
	 },5000)
	 })
response.on("end",()=>{
     console.log("End of reponse of Server")
})
}).on("error",(err)=>{
console.err(err.message())
})	
																	  