var zlib=require('zlib');
var tar=require('tar');
var crypto=require('crypto');
var concat = require('concat-stream');
var path=require('path');


var decriptStream=crypto.createDecipher(process.argv[2],process.argv[3]);
var unzippingStream=zlib.createGunzip();
var tarParserStream=tar.Parse();


process.stdin.pipe(decriptStream).pipe(unzippingStream).pipe(tarParserStream);

tarParserStream.on('entry',function(entryData){
	if(entryData.type!=='File'){
		return
	}

	var concatStream=concat(writeLineResult);
	var md5HashSTream=crypto.createHash('md5',{encoding:'hex'});
	entryData.pipe(md5HashSTream).pipe(concatStream);

	function writeLineResult(stringBuffer){
		console.log(stringBuffer+" "+entryData.path);
	}
})