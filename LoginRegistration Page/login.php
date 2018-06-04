<?php
session_start();

require_once 'config.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      $username = mysqli_real_escape_string($link,$_POST['uname']);
      $password = mysqli_real_escape_string($link,$_POST['pass']); 
      
      $query = "SELECT * FROM account WHERE username = '$username' and password = '$password'";
      $result = mysqli_query($link,$query);
	  if (!$result) {
		echo "Error:" . mysqli_error($link);
		exit();
		}
      $count = mysqli_num_rows($result);
      if($count == 1) {
         $_SESSION['login_user'] = $username;
         header("location: profile.php");
		 
      } else{
			echo '<script type="text/javascript">'; 
			echo 'alert("Invalid username or password");'; 
			echo 'window.location.href = "login.html";';
			echo '</script>';
      }
   }
?>