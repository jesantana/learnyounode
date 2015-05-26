var q=require('q')
, def=q.defer();

def.promise.then(console.log);

def.resolve("SECOND");
console.log("FIRST");

