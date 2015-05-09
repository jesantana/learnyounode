function checkUsersValid(goodUsers){


	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(current){
			return goodUsers.some(function(goodCurrent){
				return current===goodCurrent;
			})
		})
	};
}

module.exports=checkUsersValid;