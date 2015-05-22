function loadUsers(userIds,load,done){
	var users=[];
	var counter=0;
	userIds.forEach(function(current,index){
		
		load(current,function(objVal){
			users[index]=objVal;
			counter++;
			if(counter==userIds.length){
				done(users);
			}
		});
	})
}

module.exports=loadUsers;