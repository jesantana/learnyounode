var concat=require('concat-stream');

process.stdin.pipe(concat(function(str){
	process.stdout.write(str.toString().split("").reverse().join(""));
}))

