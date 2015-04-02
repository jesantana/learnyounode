var fs=require('fs');

var dirPath=process.argv[2];
var fileExt=process.argv[3];

var fileText=fs.readdir(dirPath,function(err,list){
	if(!err){
		var prefixedExt='.'+fileExt;
		list.forEach(function(currentFile){
			if(currentFile.lastIndexOf(prefixedExt)>=0){
				console.log(currentFile);
			}
		})
	}
});
