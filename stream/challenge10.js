var tr=require('trumpet');
var through2=require('through2');
var trumpet=tr();
var upperCaseStream=through2(write,end);

process.stdin.pipe(trumpet).pipe(process.stdout);

var loudValue=trumpet.select('.loud');

var loudSelectionStream=loudValue.createStream();

loudSelectionStream.pipe(upperCaseStream).pipe(loudSelectionStream);





function write(buffer,encoding,next){
	
	this.push(buffer.toString().toUpperCase());
	next();
}

function end(done){
	done();
}