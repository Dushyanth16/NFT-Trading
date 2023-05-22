<?php
include('server.php');

// Start a session
session_start();

if (isset($_POST['login_user'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Validate the login credentials
  // Your validation logic here

  if ($login_successful) {
    // Store the logged-in user's information in the session
    $_SESSION['username'] = $username;

    // Redirect to the index page
    header("Location: profile2.html");
    exit(); // Ensure that the script stops executing after the redirect
  } else {
    // Display an error message
    $errors[] = "Invalid username or password";
  }
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
  <link rel="stylesheet" type="text/css" href="style1.css">
</head>
<body>
  <div class="container">
    <div class="login-container">
      <div class="header">
        <h2>Login</h2>
      </div>

      <form method="post" action="login.php">
        <?php include('errors.php'); ?>
        <div class="input-group">
          <label>Username</label>
          <input type="text" name="username">
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="password" name="password">
        </div>
        <div class="input-group">
          <button type="submit" class="btn" name="login_user">Login</button>
        </div>
        <p>
          Not yet a member? <a href="register.php">Sign up</a>
        </p>
      </form>
    </div>

    <div class="image-container">
      <img src="logo.png" alt="Profile Picture">
    </div>
  </div>
</body>
</html>
