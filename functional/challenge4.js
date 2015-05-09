function getShortMessages(arrayMessagesObject){

	return arrayMessagesObject.filter(function(current){
		return current.message.length<50;
	}).map(function(current){
		return current.message;
	})
}

module.exports=getShortMessages