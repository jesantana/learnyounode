var http=require('http');
var through=require('through2');

var upperCaser=through(write,end);

var server=http.createServer(function(request,response){
	if(request.method=='POST'){
		request.pipe(upperCaser).pipe(response);
	}
});
server.listen(process.argv[2]);

function write(buffer,not,next){
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done){
	done();
}