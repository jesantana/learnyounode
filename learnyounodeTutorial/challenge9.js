var net=require('net');
var strftime=require('strftime');

var port=Number(process.argv[2]);

var server=net.createServer(function(socket){
	socket.end(strftime('%F %R')+'\n');
})

server.listen(port);