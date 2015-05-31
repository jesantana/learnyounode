var Q=require('q');
var qfCall=Q.fcall(JSON.parse,process.argv[2]);

qfCall.then(null,console.log);
