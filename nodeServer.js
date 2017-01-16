var http = require("http");

function onRequest(request, response)  {

    console.log("Request recieved");

    response.writeHead(200,{"content-Type":"text/plain"});
    response.write("Hello Node I am running");

    response.end();

}

http.createServer(onRequest).listen(8888);
console.log("Server has started");
