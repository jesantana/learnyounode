var duplexer2=require('duplexer2');
//We export reuire through2 obj in order to enable the object mode, otherwise we will receive Buffer in the write method
var through2=require('through2').obj;

module.exports=function (counter){
	var counterObj={};
	var countryExtractorStream=through2(write,end);

	


	return duplexer2(countryExtractorStream,counter);

	function write(row,encoding,next){
		
		var countryLetter=row["country"];

		if(!counterObj.hasOwnProperty(countryLetter)){
			counterObj[countryLetter]=0;
		}

		counterObj[countryLetter]++;
		next();
	}

	function end (done) {
          counter.setCounts(counterObj);
          done();
    }

}






