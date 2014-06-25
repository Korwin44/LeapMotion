var controller = new Leap.Controller();

var date = time();
var sizeUp = 120;
var timeUp = 400;

stateDevice(controller);

Leap.loop(function(frame)
{
	if(frame.hands.length = 1)
	{
		var hand = frame.hands[0];

		if(hand)
		{	
			if((time() - date) > timeUp)
			{
				if(hand.sphereCenter[0] < -sizeUp)
				{
					console.log("LEFT: " + hand.sphereCenter[0]);
				}
				else if(hand.sphereCenter[0] > sizeUp)
				{
					console.log("RIGHT : " + hand.sphereCenter[0]);
				}

				date = time();
			}
		}
	}
});

controller.connect(); 
