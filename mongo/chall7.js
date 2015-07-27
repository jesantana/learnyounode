var mongo=require('mongodb').MongoClient;

var collName=process.argv[2];
var id=process.argv[3];

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
	
	if(err){throw err}
	
	var coll=db.collection(collName);
	
	coll.remove({"_id":id},function(err,data){
		db.close();
	}
	);
	
		
})