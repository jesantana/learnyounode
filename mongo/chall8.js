var mongo=require('mongodb').MongoClient;

var queryAge=parseInt(process.argv[2]);

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
	
	var parrotColl=db.collection('parrots');
	parrotColl.count({
		"age":{
				$gt:queryAge
		}},function (err,count){
			console.log(count);
			db.close();
		});
		
})