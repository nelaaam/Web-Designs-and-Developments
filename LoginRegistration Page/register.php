<?php
session_start();

require_once 'config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
	
    $username = mysqli_real_escape_string($link,$_POST['uname']);
    $password = mysqli_real_escape_string($link,$_POST['pass']); 
	$firstname = mysqli_real_escape_string($link,$_POST['fname']);
	$middlename = mysqli_real_escape_string($link,$_POST['mname']);
	$lastname = mysqli_real_escape_string($link,$_POST['lname']);
	$gender = mysqli_real_escape_string($link,$_POST['gender']);
	$age = mysqli_real_escape_string($link,$_POST['age']);
	$company = mysqli_real_escape_string($link,$_POST['comp']);
	$position = mysqli_real_escape_string($link,$_POST['posit']);
	$salary = mysqli_real_escape_string($link,$_POST['salary']);
	$years_experience = mysqli_real_escape_string($link,$_POST['yoe']);
	

	if(strtolower($gender) == 'male') {
		$gender = 'M';
	} else if (strtolower($gender) == "female") {
		$gender = 'F';
	} else {
		$gender = 'O';
	}
		
	$query_check = "SELECT * FROM account WHERE username = '$username'";
	$result = mysqli_query($link,$query_check) or die("Error:" . mysqli_error($link));

	$count = mysqli_num_rows($result);
    if($count == 1) {
		echo '<script type="text/javascript">'; 
		echo 'alert("Username is already taken. Please try again.");'; 
		echo 'window.location.href = "login.html";';
		echo '</script>';     
    }else {
		$_SESSION['login_user'] = $username;
		$query = "INSERT INTO ACCOUNT (username,password,firstname,middlename,lastname,gender,age,company,position,salary,years_experience) VALUES 
		('$username','$password','$firstname','$middlename','$lastname','$gender','$age','$company','$position','$salary','$years_experience')";
      
		$result = mysqli_query($link,$query) or die("Error:" . mysqli_error($link));
        header("location: profile.php");
    }
}
?>