var through=require('through2')
var split=require('split')

var lineCounter=1;

var letterChangerStream=through(write,end);

process.stdin.pipe(split()).pipe(letterChangerStream).pipe(process.stdout);

function write(buffer,encoding,next){
	var isEven=lineCounter%2===0;
	var transformedLine=buffer.toString()+'\n';
	
	if(isEven){
		transformedLine=transformedLine.toUpperCase();
	}
	else{
		transformedLine=transformedLine.toLowerCase();
	}
	
	this.push(transformedLine);
	lineCounter++;
	next();
}

function end(done){
	done();
}