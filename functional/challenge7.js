function reduce(array,fn,init){

	function reduceInternal(index,previousAccum){
		if(index===array.length){
			return previousAccum;
		}
		var currentAccum=fn(previousAccum,array[index],index,array);
		return reduceInternal(index+1,currentAccum);
	}

	return reduceInternal(0,init);
}

module.exports=reduce;