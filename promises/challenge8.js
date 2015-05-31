var q=require('q');


var qfCall=q.fcall(iterate,1);

for(var i=1;i<=10;i++){
	

	if(i==5){
		qfCall=qfCall.then(throwMyGod);
	}

	qfCall=qfCall.then(iterate);
}
qfCall.then(null,console.log).done();

function throwMyGod(){
	throw new Error("OH NOES");
}

function iterate(val){
	console.log(val);

	return val+1;
}

