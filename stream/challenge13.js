var combine=require('stream-combiner');
var split=require('split');
var through2=require('through2');
var zlib=require('zlib');

module.exports=function(){
	
	var transformer=function(){
		var currentGenre;
		var currentBooks=[];
		
		function pushObject(stream){
			if(currentGenre!==undefined){
				var returnObj={"name":currentGenre,"books":currentBooks};
				stream.push(JSON.stringify(returnObj)+"\n");
			}
		}
		return {
			write:function (row,encoding,next){
				if (row.length === 0) return next();
				var currentObj=JSON.parse(row);

				
				if(currentObj.type==='genre'){
					pushObject(this);

					currentGenre=currentObj.name;
					currentBooks=[];
				}
				else{
					currentBooks.push(currentObj.name);
				}

				next();
			},

			end:function  (done) {
				pushObject(this);
		        done();
		    }
		}
	}();
	var counterAndTransformerStream=through2(transformer.write,transformer.end);

	return combine(split(),counterAndTransformerStream,zlib.createGzip());
}