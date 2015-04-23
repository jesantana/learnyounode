var streamWS=require('websocket-stream');

streamWS('ws://localhost:8099').write("hello\n")