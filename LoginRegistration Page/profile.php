<?php
	session_start();
	
	require_once "config.php";

    $username = $_SESSION['login_user'];
    $query = "SELECT * FROM account WHERE username = '$username'";
	$result = mysqli_query($link,$query) or die ("Error:" . mysqli_error($link));
		
		if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$username = $row["username"];
			$fullname = $row["firstname"]. " " . $row["middlename"]. " " .$row["lastname"];
			$gender = $row["gender"];
			$age = $row["age"];
			$company = $row["company"];
			$position = $row["position"];
			$salary = $row["salary"];
			$years = $row["years_experience"];
		}
	} else {
		echo "0 results";
}

	?>
<!DOCTYPE html>
<html>
<head> 
	<title> Profile </title> 
	<link rel="stylesheet" type="text/css" href="profile.css">
	<link rel="icon" href="tabIcon.png">
	
</head>
<body>
	<div class = "container" id = "dpContainer">
		<img src = "icon.png" id = "dp">
	</div>

	<div class = "container"  id = "infoBox">
		<!--Personal-->

		<p class = "h1" id= "personal"><i class="fa fa-user"></i> PERSONAL INFORMATION </p>
		<p class = "label" id= "flname"> Username:   <?php echo $username; ?> </p>
		<p class = "label" id= "flname"> Full Name: <?php echo $fullname; ?> </p> 
		<p class = "label" id= "age"> Age: <?php echo $age; ?> </p> 
		<p class = "label" id= "gender"> Gender: <?php echo $gender; ?> </p>  
		<!--Job-->
		<p class = "h1" id= "job"><i class="fa fa-building"></i> JOB INFORMATION </p>
		<p class = "label" id= "company"> Company: <?php echo $company; ?> </p>  
		<p class = "label" id= "position"> Position: <?php echo $position; ?> </p> 
		<p class = "label" id= "salary"> Expected Salary: <?php echo $salary; ?> </p>
		<p class = "label" id= "yrsExp"> Years of Experience: <?php echo $years; ?> </p>
		
		
	</div>
</body>
</html>