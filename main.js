/*
/!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ 
TO UNDERSTAND THIS CODE YOU MUST HAVE UNDERSTOOD THE RUNNING OF THE LEAP MOTION
/!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ 
*/
/*
    -           -150   0   150           +
		  ........|....|....|.........
        ..........|....|....|..........
      ............|....|....|............
    ..............|....|....|.............
   ...............|....|....|...............
  ................|....|....|................
 .................|....|....|.................
..................|....|....|..................
............... __|____|____|__................
...............|_Leap__motion__|...............
*/

// Create controller
var controller = new Leap.Controller();

// Define time
var date = time(); 

// Controle Varaiable
var sizeUp = 120; // The margin location 0
var timeUp = 400; // Time between capture

// Start detect leap motion and write a log
stateDevice(controller);

// Main Loop
Leap.loop(function(frame)
{
	// If one hand is detected
	if(frame.hands.length = 1)
	{
		var hand = frame.hands[0];

		if(hand)
		{	
			if((time() - date) > timeUp)// if ( now - start date ) is higher than timeUp
			{
				if(hand.sphereCenter[0] < -sizeUp) // If center of hand is lower than -sizeUp
				{
					console.log("LEFT: " + hand.sphereCenter[0]); // write in log LEFT
				}
				else if(hand.sphereCenter[0] > sizeUp) // If center of hand is higher than sizeUp
				{
					console.log("RIGHT : " + hand.sphereCenter[0]); // write in log RIGHT
				}

				date = time();
			}
		}
	}
});

controller.connect(); 
