<?php
include("base_connect.php");

?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
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
        if(isset($_POST['reg_submit'])){//при нажатии на кнопку "отправить"
            $reg_login = htmlentities(strip_tags($_POST['reg_login']));//есть ли в массиве имя
            $reg_pass = htmlentities(strip_tags($_POST['reg_pass']));//есть ли в массиве логин
            $reg_name = htmlentities(strip_tags($_POST['reg_name']));//а тут сами догадаетесь
            $reg_email = htmlentities(strip_tags($_POST['reg_email']));//а тут сами догадаетесь
            $reg_phone = htmlentities(strip_tags($_POST['reg_phone']));//а тут сами догадаетесь

            $isError = true;//переменная для определения ввел ли пользователь все данные
            /*if(preg_match("/a-z/", $reg_phone)){
              //echo "Failed";
              print("dsvdsvsdvsdv");
              exit("Не верен формат числа."); 
            }*/
            
            /*if($name == ""){//если имя не введенно то
              
              $isError = false;//значит подключится к базе данных не получится
            }
            if($login == ""){
              
              $isError = false; 
            }
            if($password == ""){
              
              $isError = false;
            }*/




            if($isError){//если ошибок при регистрации не возникло то сохраняем введенные данные в БД
              $isSaved = true;//переменная для определения сохранились ли введенные данные в БД

              $link = mysqli_connect('localhost', 'root', 'usbw', 'my_base');//подключаемся к БД
              if(!$link){
                printf("Невозможно подключится к БД");
                $isSaved = false;
                exit();
              }

              if(!mysqli_set_charset($link, "utf8")){//устанавливаем кодировку utf8
                printf("Ошибка при загрузке набора символов");
                $isSaved = false;
              }else{
                //printf("5 минут, полет нормальный\n");
              }

              $tabl = 'users';
              if($result = mysqli_query($link, "INSERT INTO $tabl (login, password, name, email, phone) VALUES ('".mysqli_real_escape_string($link, $_POST['reg_login'])."', '".mysqli_real_escape_string($link, $_POST['reg_pass'])."', '".mysqli_real_escape_string($link, $_POST['reg_name'])."', '".mysqli_real_escape_string($link, $_POST['reg_email'])."', '".mysqli_real_escape_string($link, $_POST['reg_phone'])."')")){
                printf("Данные записаны");
              }else{
                printf("Это фиаско");
                $isSaved = false;
              }

              mysqli_close($link);//закрываем соединение с БД


              if($isSaved){
                header('Location: http://localhost:8080/f/');
              }else{
                echo "<b>Ошибка сохранения данных, извините</b>";
              }
            }
          }
       ?>

    <header>
      <div class="container">
        <div class="row">
          <ul id="contacts" class="list-inline">
            <li>Ваш город - <span>Харьков</span></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Магазины</a></li>
            <li><a href="#">Контакты</a></li>
             
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


   <section id="registration">
    	<div class="container">
    		<div class="row text-left">
    			<h2>Регестрация</h2>
    		</div>
    		<hr>
    		<div class="row">
    			<form action="registration.php" method="post" id="form_reg">
    				 <p id="reg_message"></p>   
    				 <div class="block-form-registr">
    				 	 <ul>
    				 	 	<li>
    				 	 		<label for="">Логин <span>*</span></label>
    				 	 		
    				 	 		<input type="text" name="reg_login" id="reg_login" required>
    				 	 	</li>
    				 	 	<li>
    				 	 		<label for="">Пароль <span>*</span></label>
    				 	 	
    				 	 		<input type="text" name="reg_pass" id="reg_pass" required>
    				 	 	</li>
    				 	 	<li>
    				 	 		<label for="">Имя <span>*</span></label>
    				 	 		
    				 	 		<input type="text" name="reg_name" id="reg_name" required>
    				 	 	</li>
    				 	 	<li>
    				 	 		<label for="">E-mail <span>*</span></label>
    				 	 	
    				 	 		<input type="text" name="reg_email" id="reg_email" required>
    				 	 	</li>
    				 	 	<li>
    				 	 		<label for="">Мобильный телефон <span>*</span></label>
    				 	 		
    				 	 		<input type="text" name="reg_phone" id="reg_phone" required>
    				 	 	</li>
    				 	 </ul>
    				 </div>
    				 <p align="center"><input type="submit" name = "reg_submit" id="form_submit" value="Регистрация"></p>
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
    <script>
      /*$(document).ready(
          function() {
              $("html").niceScroll({cursorcolor:"#000"});
          }
      );
    </script>
    <!--/
    <?php
      /*($result = mysql_query("SELECT * FROM table_products",$link); 
      if(mysql_num_rows($result) > 0){
        $row = mysql_fetch_array($result);
        /*do{
               echo '
                  <p></p>
               ';

        }while{$row = mysql_fetch_array($result));}*/
      //}
    ?>-->
  </body>
</html>
 