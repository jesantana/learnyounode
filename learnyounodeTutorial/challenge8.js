var http=require('http');
var bl=require('bl');

var urls=[process.argv[2],process.argv[3],process.argv[4]];
var responses=[];

var finishedOk=0;

for(var i=0;i<urls.length;i++){
	readUrl(urls,i);
}


function readUrl(urls,i){
	http.get(urls[i], function(response){
		//response.setEncoding('utf8');

		response.pipe(bl(function(err,data){

			if(err){
				return console.log(err);
			}
			
			finishedOk++;
			responses[i]=data.toString();
			
			//console.log(responses.length+responses);
			if(finishedOk==urls.length){
				for(var j=0;j<responses.length;j++){
					console.log(responses[j]);
				}
			}
		}));

	})

}