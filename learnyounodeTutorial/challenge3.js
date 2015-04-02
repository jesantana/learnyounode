var fs=require('fs');

var filePath=process.argv[2];

var fileText=fs.readFile(filePath,'utf8',function(err,fileText){
	if(!err){
		var newLinesNumber=fileText.split('\n').length-1;
		console.log(newLinesNumber);
	}
});


