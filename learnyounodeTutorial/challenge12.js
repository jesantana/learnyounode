var http=require('http');
var url=require('url');
var port=Number(process.argv[2]);


var server=http.createServer(function(request,response){
	
	if(request.method=='GET'){
		var parsedUrl=url.parse(request.url,true);
		var parsedQueryString=parsedUrl.query;
		var parsedPathName=parsedUrl.pathname;

		if(parsedPathName=='/api/parsetime'){
			writeOkResponse(response,parsedQueryString['iso'],getParsedTimeObject);
		}
		else if(parsedPathName=='/api/unixtime'){
			writeOkResponse(response,parsedQueryString['iso'],getUnixTimeObject);
		}
		else{
			writeError(response);
		}
	}
	else{
		writeError(response);
	}

});

server.listen(port);

function writeError(response){
	response.end("ERROR")
}

function writeOkResponse(response,isoStr,objectBuilderFunction){
	response.writeHead(200,{'Content-Type': 'application-json'});
	var fecha=new Date(isoStr);

	response.end(JSON.stringify(objectBuilderFunction(fecha)));
}

function getParsedTimeObject(fecha){
	return {"hour":fecha.getHours(),"minute":fecha.getMinutes(),"second":fecha.getSeconds()};
}

function getUnixTimeObject(fecha){
	return {"unixtime":fecha.getTime()};
}

