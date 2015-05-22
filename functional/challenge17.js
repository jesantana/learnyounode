/*function curryN(fn,n){
	var finalArity=n || fn.length;
	var alreadyPassedValues=[];

	
	return function auXCurry(ni){
		alreadyPassedValues.push(ni);

		if(alreadyPassedValues.length<finalArity){
			return auXCurry;
		}
		else{

			return fn.apply(this,alreadyPassedValues);
		}
	}

}*/

module.exports=curryN;

function curryN(fn, n) {
  n = n || fn.length
  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN