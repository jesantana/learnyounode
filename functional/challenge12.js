function Spy(object,target){
	var countCalls={
		count:0
	};
	var fnOld=object[target];
	
	object[target]=function(){
		countCalls.count++;
		fnOld.apply(object,arguments);
	};

	return countCalls;	
}

module.exports=Spy
