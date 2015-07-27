var mongo=require('mongodb').MongoClient;

var personName={
	"firstName":process.argv[2],
	"lastName":process.argv[3]
	}

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
	
	if(err){throw err}
	
	var docColl=db.collection('docs');
	
	docColl.insert(personName,function(err,data){
		db.close();
		console.log(JSON.stringify(personName));
	});
	
		
})