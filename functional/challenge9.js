function logger(namespace){

	return function(){
		var argArray=Array.prototype.slice.call(arguments);
		var allArgArray=[namespace].concat(argArray);
		console.log.apply(null,allArgArray);
	}
}

module.exports=logger;