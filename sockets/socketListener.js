module.exports = function(io){ 
	io.sockets.on('connection', function(socket){
		socket.emit('info', {data: 'connected'});

		socket.on('getPrice', function(data){
			if(data.product == 'lasi_sh'){
				
			}
		});
	});
};