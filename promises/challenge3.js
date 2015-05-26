var Q=require('q');

var defered=Q.defer();

defered.promise.then(console.log,console.log);

defered.resolve("I FIRED");
defered.reject("I DID NOT FIRE");


