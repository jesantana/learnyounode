function repeat(operation, num){
	if(num>0){
		repeat(operation,num-1);
	}

	operation();

}

module.exports=repeat;