var qio=require("q-io/http");

qio.read("http://localhost:7000").then(putIdPromises).then(function (json) {
  console.log(JSON.parse(json));
});


function putIdPromises(id){
	return qio.read("http://localhost:7001/"+id);
}