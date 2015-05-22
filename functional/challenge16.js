function getDependencies(tree){
	var result=getDependenciesFromInternalObject(tree.dependencies);

	return result.sort();
	
	function getDependenciesFromInternalObject(intTree){
		var result=[];
		for (var dependency in intTree){
			var currentObj=intTree[dependency];
			var depName=dependency+"@"+currentObj.version;
			addIfNotPresent(result,depName);

			if(currentObj.dependencies!==undefined){
				Array.prototype.push.apply(result, getDependenciesFromInternalObject(currentObj.dependencies));
			}
		}
		return result
	}

	function addIfNotPresent(arr,newElem){
		if(arr.indexOf(newElem)===-1){
			arr.push(newElem);
		}
	}

	
}

module.exports=getDependencies;