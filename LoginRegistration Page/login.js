
function slide(direction) {
	document.getElementById("logform").reset();
	document.getElementById("submit").disabled = false;
	if (direction == "left") {
		if (confirm("Confirm Action? Any form will be reset.")) {
			document.getElementById("slidercontainer").classList.remove("sliderright");
			document.getElementById("star").classList.remove("starsliderright");
			document.getElementById("dlsud").classList.remove("dlsudsliderright");
			document.getElementById("question").classList.remove("slideinfosliderright");
			document.getElementById("subtitle").classList.remove("slideinfosliderright");
			document.getElementById("startbutton").classList.remove("buttonsliderright");

			setTimeout(function () {
				document.getElementById("slidercontainer").classList.add("sliderleft");
				document.getElementById("star").classList.add("starsliderleft");
				document.getElementById("dlsud").classList.add("dlsudsliderleft");
				document.getElementById("question").classList.add("slideinfosliderleft");
				document.getElementById("subtitle").classList.add("slideinfosliderleft");
				document.getElementById("startbutton").classList.add("buttonsliderleft");
				setTimeout(function () {
					document.getElementById("question").innerHTML = ("Already have an account?");
					document.getElementById("subtitle").innerHTML = ("Log back in to check for new opportunities.");
					document.getElementById("startbutton").innerHTML = ("Sign In");
				}, 500);
				document.getElementById("startbutton").onclick = function() { slide("right"); };
			}, 20);
			document.getElementById("logform").reset();
			document.getElementById("back").onlick = function() { nextpage(0); };
			document.getElementById("next").onlick = function() { nextpage(1); };
			document.getElementById("back").value = "zero";
			nextpage(0);
		}
		
	}
	else if(direction == "right") {
		if (confirm("Confirm Action? Any form will be reset.")) {
			document.getElementById("slidercontainer").classList.remove("sliderleft");
			document.getElementById("star").classList.remove("starsliderleft");
			document.getElementById("dlsud").classList.remove("dlsudsliderleft");
			document.getElementById("question").classList.remove("slideinfosliderleft");
			document.getElementById("subtitle").classList.remove("slideinfosliderleft");
			document.getElementById("startbutton").classList.remove("buttonsliderleft");
		
			setTimeout(function () {
				document.getElementById("slidercontainer").classList.add("sliderright");
				document.getElementById("star").classList.add("starsliderright");
				document.getElementById("dlsud").classList.add("dlsudsliderright");
				
				document.getElementById("question").classList.add("slideinfosliderright");
				document.getElementById("subtitle").classList.add("slideinfosliderright");
				document.getElementById("startbutton").classList.add("buttonsliderright");
				setTimeout(function () {
					document.getElementById("question").innerHTML = ("Not Yet Registered?");
					document.getElementById("subtitle").innerHTML = ("Sign up now to discover great opportunities.");
					document.getElementById("startbutton").innerHTML = ("Create An Account");
				}, 500);
				document.getElementById("startbutton").onclick = function() { slide("left"); };			
			}, 20);
			document.getElementById("regform").reset();
			document.getElementById("back").onlick = function() { nextpage(0); };
			document.getElementById("next").onlick = function() { nextpage(1); };
			document.getElementById("back").value = "zero";
			nextpage(0);
		}
	}
	else {
		document.getElementById("startbutton").onclick = function() {
			slide("left");
		};
	}
}

function nextpage(n) {
	var btn1 = document.getElementById("next");
	var btn2 = document.getElementById("back");
	if (n == 0 && btn2.value == "zero") {
				document.getElementById("submit").disabled = false;
		btn2.style.display = "none";
		btn1.style.display = "inline";
		btn1.value = "one";
		btn2.value = "";
		document.getElementById("loginInfo").style.display = "block";
		document.getElementById("personalInfo1").style.display = "none";
		document.getElementById("personalInfo2").style.display = "none";
		document.getElementById("workInfo").style.display = "none";
		document.getElementById("workInfo2").style.display = "none";
		document.getElementById("submit").style.display = "none";
	}
	else if ( btn1.value == "one" || (n == 0 && btn2.value == "one")) {
		document.getElementById("submit").disabled = false;
		btn2.style.display = "inline";
		btn1.value = "two";
		btn2.value = "zero";
		document.getElementById("loginInfo").style.display = "none";
		document.getElementById("personalInfo1").style.display = "block";
		document.getElementById("personalInfo2").style.display = "none";
		document.getElementById("workInfo").style.display = "none";
		document.getElementById("workInfo2").style.display = "none";
		document.getElementById("submit").style.display = "none";
	} 
	else if (btn1.value == "two" || (n == 0 && btn2.value == "two")) {
				document.getElementById("submit").disabled = false;
		btn1.value = "three";
		btn2.value = "one";
		btn1.style.display = "inline";
		document.getElementById("loginInfo").style.display = "none";
		document.getElementById("personalInfo1").style.display = "none";
		document.getElementById("personalInfo2").style.display = "block";
		document.getElementById("workInfo").style.display = "none";
		document.getElementById("workInfo2").style.display = "none";
		document.getElementById("submit").style.display = "none";
	}
	else if (btn1.value == "three" || (n == 0 && btn2.value == "three")) {
				document.getElementById("submit").disabled = false;
		btn1.value = "four";
		btn2.value = "two";
		btn1.style.display = "inline";
		document.getElementById("loginInfo").style.display = "none";
		document.getElementById("personalInfo1").style.display = "none";
		document.getElementById("personalInfo2").style.display = "none";
		document.getElementById("workInfo").style.display = "block";
		document.getElementById("workInfo2").style.display = "none";
		document.getElementById("submit").style.display = "none";
	}
	else if (btn1.value == "four") {
		btn2.value = "three";
		btn2.style.display = "inline";
		btn1.style.display = "none";
		document.getElementById("submit").disabled = false;
		document.getElementById("loginInfo").style.display = "none";
		document.getElementById("personalInfo1").style.display = "none";
		document.getElementById("personalInfo2").style.display = "none";
		document.getElementById("workInfo").style.display = "none";
		document.getElementById("workInfo2").style.display = "block";
		document.getElementById("submit").style.display = "inline";
	}
}

	var slider1 = document.getElementById("salary");
	var output1 = document.getElementById("es");
	output1.innerHTML = slider1.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider1.oninput = function() {
		output1.innerHTML = this.value;
	}
	var slider2 = document.getElementById("yoe");
	var output2 = document.getElementById("years");
	output2.innerHTML = slider2.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider2.oninput = function() {
		if(this.value == '10') {
			output2.innerHTML = this.value + "+";
		} else {
			output2.innerHTML = this.value;
		}	
	}

