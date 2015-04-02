var http=require('http');
var bl=require('bl');

var url=process.argv[2];

http.get(url, function(response){
	response.setEncoding('utf8');

	response.pipe(bl(function(err,data){
		if(err){
			console.log(err);
		}
		else{
			var readData=data.toString();
			console.log(readData.length);
			console.log(readData);
		}
	}));

})