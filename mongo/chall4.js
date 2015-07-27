var mongo=require('mongodb').MongoClient;

var queryAge=parseInt(process.argv[2]);

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
	
	var parrotColl=db.collection('parrots');
	parrotColl.find({
		"age":{
				$gt:queryAge
		}},{
		name:1,
		age:1,
		_id:0
		}).toArray(function(err,documents){
			console.log(documents);
			db.close();
		});
		
})