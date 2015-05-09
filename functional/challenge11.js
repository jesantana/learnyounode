module.exports=function arrayMap(array,fn){
	return array.reduce(function(acc,current){
		acc.push(fn(current));
		return acc;
	},[])
}