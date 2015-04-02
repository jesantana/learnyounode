
var fs=require('fs');

module.exports=function listFilesInDirectory (directory,extension,callback){
		fs.readdir(directory,function(err,list){
		if(err){
			return callback(err);
		}
			var prefixedExt='.'+extension;
			var fileWithExtension=list.filter(function(currentFile){
				return currentFile.lastIndexOf(prefixedExt)>=0;
				});
			return callback(null,fileWithExtension);
	});

}



