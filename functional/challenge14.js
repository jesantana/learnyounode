function repeat(operation,num){

	if(num<=0)return
	return function(){
		//console.log('calling '+num);
		operation()
		return repeat(operation,--num)
	}
}

function trampoline(fn){
	while(fn && typeof fn ==='function'){
		//console.log('inside trampoline loop');
		fn=fn();
	}
	return fn;
}

module.exports=function(operation,num){

	function tempTrampoline(){
		return repeat(operation,num);
	}
	return trampoline(tempTrampoline);
}