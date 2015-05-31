var qio=require("q-io/http"),
	_=require('lodash'),
	cacheUrl="http://localhost:7000",
	dbUrl="http://localhost:7001";

var concatId=_.bind(String.prototype.concat,dbUrl+"/");

qio.read(cacheUrl)
				.then(_.compose(qio.read,concatId))
				.then(_.compose(console.log,JSON.parse));
