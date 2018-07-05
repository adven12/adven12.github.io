<!DOCTYPE html>
<html lang="ru">
<html>
	<head>
		<meta charset="utf-8">
		<title>Профиль</title>
		 <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Регистрация</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	</head>
	<body>
		<?php
			session_start();
		//if (!isset($_SESSION['id'])||$_SESSION['id'] == '')
		//{
			//header('Location: login.php');
		//}
		$link = mysqli_connect('localhost', 'root', 'usbw', 'my_base');
		mysqli_set_charset($link, "utf8");
		$userData = array();
		if ($result = mysqli_query($link, "SELECT * FROM users WHERE id ='1'"))
		{
			while ($row = mysqli_fetch_assoc($result)) 
			{
				$userData=$row;
				# code...
			}
			mysqli_free_result($result);
		}

		if(isset($_POST['edit']))
		{
			$reg_login = htmlentities(strip_tags($_POST['reg_login']));
			$reg_pass = htmlentities(strip_tags($_POST['reg_pass']));
			$reg_name = htmlentities(strip_tags($_POST['reg_name']));
			$reg_email = htmlentities(strip_tags($_POST['reg_email']));
			$reg_phone = htmlentities(strip_tags($_POST['reg_phone']));
			$isError = true;//переменная для определения ввел ли пользователь все данные
							
				$link = mysqli_connect('localhost', 'root', 'usbw', 'my_base');	
				mysqli_set_charset($link, "utf8");

				if ($isError)
				{
					$query = "UPDATE users SET login = '".$reg_login."', ".
					"password = '".$reg_pass."',".
					"name = '".$reg_name."',".
					"email = '".$reg_email."',".
					"phone = '".$reg_phone."',".
					"WHERE id = '".$_SESSION['id']."'";
					$action = mysqli_query($link,$query);
				}

				mysqli_close($link);
		}
		?>

		 <header>
      <div class="container">
        <div class="row">
          <ul id="contacts" class="list-inline">
            <li>Ваш город - <span>Харьков</span></li>
            <li><a href="o-nas.php">О нас</a></li>
            <li><a href="magaziny.php">Магазины</a></li>
            <li><a href="contacts.php">Контакты</a></li>
             
            <form class="navbar-right">
            <button>Вход</button>
            <a id ="registr" href="registration.php">Регистрация</a>
            </form>
            </ul>
         </div>
        </div>
          <hr>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center logo">
            <a href="index.php"> <p><span>O P</span></p></a>
          </div>
          <div class="col-md-4 text-left brand">
            <a href="index.php"> <p><span>Original</span>
            <br>
            <span>prints</span>
            </p>
            </a>
          </div>
          <div class="col-md-4 text-right grafic">
            <h3>+380-991-917-099</h3>
            <p>Режим работы:<br>Будние дни: с 9:00 до 18:00<br>Суббота,Воскресенье - выходные</p>
          </div>
        </div>
           <hr>
       </div>
   </main>

    <section id="profile">
    	<div class="container">
    		<div class="row text-left">
    			<h2>Профиль</h2>
    		</div>
    		<hr>
    		<div class="row">

		<form action="profile.php" method="post">
			<input type="text" name="reg_login" id="reg_login" value="<?php echo $userData['login']; ?>" required>
			<br>
			<br>
			<input type="text" name="reg_pass" id="reg_pass" value="<?php echo $userData['password']; ?>" required>
			<br>
			<br>
			<input type="text" name="reg_name" id="reg_name" value="<?php echo $userData['name']; ?>" required>
			<br>
			<br>
			<input type="text" name="reg_email" id="reg_email" value="<?php echo $userData['email']; ?>" required>
			<br>
			<br>
			<input type="text" name="reg_phone" id="reg_phone" value="<?php echo $userData['phone']; ?>" required>
			<br>
			<br>
			<!--<input name="edit" type="submit" value="Редактировать"></br>-->
		</form>
		</div>
    	</div>
    </section>







 <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                
              </div>
              <div class="modal-body">
               <div class="row">
                 
               </div>
              </div>
            </div>
          </div>
        </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script>
      //new WOW().init();
    </script>
	</body>
</html>