var http = require('http');
var fs=require("fs");
var qs = require('querystring');
http.createServer(function (request, response) {
  // 发送 HTTP 头部
  // HTTP 状态值: 200 : OK
  // 内容类型: text/html
  var postData="";
  var results=[];
switch(request.url){
    case "/index.html":
    fs.readFile("index.html",function(err,data){
      if(err) throw err;
      response.writeHead(200, {'Content-Type': 'text/html'});
     response.write(data.toString());
      response.end();
    });
    break;
  case "/main.html":
    fs.readFile("main.html",function(err,data){
      if(err) throw err;
      response.writeHead(200, {'Content-Type': 'text/html'});
       response.write(data.toString());
      response.end();
    });
    break;
  case "/Add.js":
    request.on("data",function(chunck){
      postData+=chunck;
    });
    request.on("end",function(){
      var result = qs.parse(postData);
      results.push(result);
      response.end(JSON.stringify(results));
    });
    break;
  default:
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("nodejs");
}
}).listen(7798);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:7798/main.html');