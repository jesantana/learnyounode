function duckCountRecursive(){
	var argContainer=arguments;

	function duckCountInternal(index,total){
		if(index===argContainer.length){
			return total;
		}
		if(Object.prototype.hasOwnProperty.call(argContainer[index],"quack")){
			return duckCountInternal(index+1,total+1);
		}
		return duckCountInternal(index+1,total);
	}

	return duckCountInternal(0,0);
}


function duckCount(){
	var argContainer=arguments;

	return Array.prototype.reduce.call(argContainer,function(accum,current){
		if(Object.prototype.hasOwnProperty.call(current,"quack")){
			return accum+1;
		}
		return accum;
	},0);
}

module.exports=duckCount;