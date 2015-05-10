function repeat(operation,num){
	if(num<=0)return
	operation();
	setImmediate(repeat,operation,num--);
}

module.exports=repeat;