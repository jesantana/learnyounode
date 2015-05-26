var q=require('q');

var deferred=q.defer();

function printError(error){
	console.log(error.message);
}

deferred.promise.then(null,printError);

setTimeout(deferred.reject,300,new Error("REJECTED!"));
