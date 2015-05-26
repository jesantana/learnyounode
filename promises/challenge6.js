var Q=require('q');



function parsePromised(args){
	var defer=Q.defer()
	,res;

	try{
		res=JSON.parse(args);
	}
	catch(e){
		defer.reject(e);
	} 
	defer.resolve(res);

	return defer.promise;

}

parsePromised(process.argv[2]).then(null,console.log);
