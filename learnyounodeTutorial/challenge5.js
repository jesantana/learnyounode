var directoryModule=require('./directoryModule.js');

directoryModule(process.argv[2],process.argv[3],function(err,data){
	if(!err){
		data.forEach(function(current) {
			console.log(current);
		});
	}
})

