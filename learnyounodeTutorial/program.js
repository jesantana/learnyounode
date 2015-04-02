//console.log('HELLO WORLD')

var i;
var accum=0;

for(i=2;i<process.argv.length;i++){
	accum+=Number(process.argv[i]);
}

console.log(accum);