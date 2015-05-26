var Q=require('q')

var defer=Q.defer();

function attachTitle(args){
	return "DR. "+args;
}

defer.promise.then(attachTitle).then(console.log);
var props=defer.promise.then(attachTitle);


defer.resolve("MANHATTAN");