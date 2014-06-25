function stateDevice(controller) // Check if the leapmotion device is connected or not
{
	var connected = function(controller) // Methode if connected
	{
		controller.on('deviceConnected', function(){console.log("Leap Motion Connected");});
	};

	var disconnected = function(controller) // Methode if is disconnected
	{
		controller.on('deviceDisconnected', function(){console.log("Leap Motion Disconnected");});
	};

	connected(controller); 
	disconnected(controller);
}

function time() // this function return the local timestamp.
{
	var date = new Date();
	return date.getTime();
}