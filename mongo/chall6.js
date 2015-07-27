var mongo=require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
	
	if(err){throw err}
	
	var usersColl=db.collection('users');
	
	usersColl.update({{"username":"Tina"}
	,{$set:{"age":40}}},function(err,data){
		db.close();
	}
	);
	
		
})