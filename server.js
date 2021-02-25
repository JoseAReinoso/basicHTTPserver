const http = require('http');

const user = {
    name:'john',
    hobby:'skatting',
}

//creating server
const server = http.createServer((request, response) => {
    console.log("Headers",request.headers)
    console.log("Method",request.method)
    console.log("Url =",request.url)

    //stating type of content to be sent
    response.setHeader('content-Type', 'application/json');
    //sending response
    response.end(JSON.stringify(user))
})
//server listening to calls made to 3000
server.listen(3000)
