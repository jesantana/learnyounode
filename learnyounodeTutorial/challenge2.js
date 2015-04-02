var fs=require('fs');

var filePath=process.argv[2];

var fileText=fs.readFileSync(filePath).toString();
var newLinesNumber=fileText.split('\n').length-1;

console.log(newLinesNumber);