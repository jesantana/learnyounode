var http=require('http');
var map=require('through2-map');
var port=process.argv[2];


var server=http.createServer(function(request,response){
	
	if(request.method=='POST'){
		request.pipe(upperCaseMap).pipe(response);
	}
});

var upperCaseMap=map(function(chunk){
	return chunk.toString().toUpperCase();
});

server.listen(port);