function addPlayerChoice(played) {
	document.getElementById("rock").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("scissors").disabled = true;
	document.getElementById("notif").innerHTML = "computer's turn";	

	
	if (played == 1) {
		document.getElementById("user").src = "round-rock.png";
	}
	else if (played == 2) {
		document.getElementById("user").src = "round-paper.png";
	}
	else if (played == 3) {
		document.getElementById("user").src = "round-scissors.png";
	}

	getScriptChoice(played);

}
function getScriptChoice(p) {
	

	var z = 0;
	while (z == 0) {
		z = Math.floor(Math.random() * 3);
	}
	setTimeout(function(){  
		addScriptChoice(z); 
		
		// Draw
		if(z == p) {
			document.getElementById("notif").innerHTML = "this round is a draw!";	
		}
		// Win
		else if (z == 1 && p == 3 || z == 2 && p == 1 || z == 3 && p == 2) {
			document.getElementById("notif").innerHTML = "you lost this round!";	
		}
		// Lose
		else if (z == 1 && p == 2 || z == 2 && p == 3 || z == 3 && p == 1) {
			document.getElementById("notif").innerHTML = "you won this round!";	
		}
	}, 1500);

	setTimeout( function () {
		gameReset();
	},5000);
	

}

function addScriptChoice(scriptPlayed) {
	if (scriptPlayed == 1) {
		document.getElementById("ai").src = "round-rock.png";
	}
	else if (scriptPlayed == 2) {
		document.getElementById("ai").src = "round-paper.png";
	}
	else if (scriptPlayed == 3) {
		document.getElementById("ai").src = "round-scissors.png";
	}
}
function gameReset() {
  
	document.getElementById("rock").disabled = false;
	document.getElementById("paper").disabled = false;
	document.getElementById("scissors").disabled = false;
	document.getElementById("notif").innerHTML = "player's turn";	
	document.getElementById("user").src = "you.png";
	document.getElementById("ai").src = "ai.png";
	
}