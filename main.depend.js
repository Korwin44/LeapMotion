function stateDevice(controller)
{
	var connected = function(controller)
	{
		controller.on('deviceConnected', function(){console.log("Leap Motion Connected");});
	};

	var disconnected = function(controller)
	{
		controller.on('deviceDisconnected', function(){console.log("Leap Motion Disconnected");});
	};

	connected(controller);
	disconnected(controller);
}

function time()
{
	var date = new Date();
	return date.getTime();
}