function countWords(inputWords){
	return inputWords.reduce(function(accum,current){
		accum[current]=++accum[current] || 1;
		return accum;
	},{})
}

module.exports=countWords;