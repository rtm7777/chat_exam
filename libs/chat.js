module.exports = function (io) {
	io.sockets.on('connection', function (socket) {
		socket.on('chat', function(message) {
			socket.broadcast.emit('chat', {user: 'user', message: message});
			socket.emit('chat', {user: 'user', message: message});
		});
	});	
}; 