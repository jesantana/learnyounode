var mongo=require('mongodb').MongoClient;

var size=process.argv[2];

mongo.connect("mongodb://localhost:27017/learnyoumongo",function(err,db){
	
	if(err){throw err}
	
	var coll=db.collection("prices");
	var match={$match:{size:size}};
	
	var group={$group:{_id:"eltotalmio",eltotalmio:{$avg:"$price"}}};
	
	coll.aggregate([match,group]).toArray(function(err,results){
		console.log(Number(results[0].eltotalmio).toFixed(2) );
		db.close();
	});
	
		
})