const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url=='/about'){
        res.end("hello bacho")
    }

    if(req.url =='/'){
        res.end("ha bhai ye home page h, but abhi kuchh content nhi h")
    }

    if(req.url=='/profile'){
        res.end("ha bhai, tumhari hi id h")
    }

    if(req.url=='/friends'){
        res.end("koi dost nhi h tumhrara")
    }
})


server.listen(3000)