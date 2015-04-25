var spawn=require('child_process').spawn;
var duplexer=require('duplexer');

module.exports=function (cmd,args){
	var child=spawn(cmd,args);

	return duplexer(child.stdin,child.stdout)
}