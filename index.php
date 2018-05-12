<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Производство, продажа и установка жалюзи</title>

    <!-- Bootstrap --> <!-- файлы стилей -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css"><!--Содержит все необходимыи иконки-->

   
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <noscript>NO</noscript>
<!-- class="hidden-xs" - скрывает контент при маленьком расширении  -->

    <header class="hidden-xs">
    	<div class="container">
    		<div class="row">
    			<div class="col-sm-3 logotype">
    				<img src="img/logo.png" width = "150" height="40" alt="Логотип" class="img-responsive">
    			</div>
    			<div class="col-sm-6 text-center descript">
    				<h4>Производство, продажа и установка жалюзи</h4>
    				<h5>в Казани и республике Татарстан</h5>
    			</div>
    			<div class="col-sm-3 phone_number">
    				<h3><a href="tel:+380991917098"> (099) 191-70-98</a></h3>
    				<p>Режим работы с 9<sup>00</sup> до 18<sup>00</sup></p>
    			</div> 
    		</div>
    	</div>
    </header>

    <nav class="hidden-xs" id = "top_nav">
    	<div class="container">
    		<div class="row">
    			<ul class="list-inline">
    				<a href="#main">
    					<li>Главная</li>
    				</a>
    				<a href="#types">
    					<li>Виды жалюзи</li>
    				</a>
    				<a href="#portfolio">
    					<li>Наши работы</li>
    				</a>
    				<a href="#offer">
    					<li>Акция</li>
    				</a>
    				<a href="#feedback">
    					<li>Отзывы</li>
    				</a>
    				<a href="#contacts">
    					<li>Контакты</li>
    				</a>
    			</ul>
    		</div>
    	</div>
    </nav>


<!-- Для моб версии -->
<nav class="visible-xs">
	<div class="container">
		<div class="col-xs-3 text-center">
			<!-- для выброски меню (6 пунктов)-->	 
	<a class = "dropdown-toggle" data-toggle = "dropdown" href="#" role = "button" aria-haspop = "true" aria-expanded = "false">
		<i class="fa fa-bars"></i> 
	</a>
		<ul class="dropdown-menu">
			<li><a href="#main">Главная</a></li>
			<li><a href="#types">Виды жалюзи</a></li>
			<li><a href="#portfolio">Наши работы</a></li>
			<li><a href="#offer">Акция</a></li>
			<li><a href="#feedback">Отзывы</a></li>
			<li><a href="#contacts">Контакты</a></li>
		</ul>
		</div>
		<div class="col-xs-6 col-xs-offset-3">
			<img src="img/logo.png" alt="" class="img-responsive pull-right">
		</div>
	</div>
</nav>

   <section id="main">
   	<div class="container">
   		<!-- wow fadeInUp  и  data-wow-delay="0.2s - (задержка главной надписи)  что бы анимировать все-->
   		<div class="row wow fadeInUp main_header" >
   			<h1><span><span>Установим жалюзи в вашей квартире </span><br><span>за 2 часа с полной гарантией </span><br><span>и бесплатной доставкой</span></span></h1>
   		</div>
   		<div class="row wow fadeInLeft" data-wow-delay="0.3s">
   			<h3>Закажите выезд замершика на дом. <span>Это бесплатно!</span></h3>
   		</div>
   		<div class="main_buttons">
   		<!--Будем вести ссылкойна всплвающеее окно прописано которое в Modal-->
   			<button class="wow fadeInLeft" data-wow-delay="0.5s" data-toggle="modal" id="get_measurer" href="#get_measurer_modal">Вызвать замерщика</button>
   			<a href="#types"><button class="wow fadeInLeft" data-wow-delay="0.6s" id="get_types">Выбрать жалюзи</button></a>
   		</div>
   	</div>
   </section>


   <section id="types">
   	<div class="container">
   		<div class="row">
   			<div class="section_header wow fadeInUp text-center">
   				<h2>Виды жалюзи</h2>
   			</div>
   		</div>
   		<div class="row text-center">
   			<div class="col-md-3 col-sm-6">
   				<div class="card wow bounceInUp " data-wow-delay="0.2s">
   					<img src="img/types-1.jpg" alt="Горизонтальные жалюзи" class="img-responsive center-block">
   					<h4>Горизонтальные жалю</h4>
   					<br>
   					<button class = "more_btn" data-toggle="modal"  href="#more_horizontal">Подробнее</button>
   					<button class = "order_btn" data-toggle="modal" href="#get_horizontal">Заказать</button>
   				</div>
   			</div>
   			<div class="col-md-3 col-sm-6">
   				<div class="card wow bounceInUp " data-wow-delay="0.4s">
   					<img src="img/types-2.jpg" alt="Вертикальные жалюзи" class="img-responsive center-block">
   					<h4>Вертикальные жалюзи</h4>
   					<br>
   					<button class = "more_btn" data-toggle="modal" href="#more_vertical">Подробнее</button>
   					<button class = "order_btn" data-toggle="modal" href="#">Заказать</button>
   				</div>
   			</div>
   			<div class="col-md-3 col-sm-6">
   				<div class="card wow bounceInUp " data-wow-delay="0.6s">
   					<img src="img/types-3.jpg" alt="Рулонные жалюзи" class="img-responsive center-block">
   					<h4>Рулонные жалюзи</h4>
   					<br>
   					<button class = "more_btn" data-toggle="modal" href="#more_roll">Подробнее</button>
   					<button class = "order_btn" data-toggle="modal" href="#">Заказать</button>
   				</div>
   			</div>
   			<div class="col-md-3 col-sm-6">
   				<div class="card wow bounceInUp " data-wow-delay="0.8s">
   					<img src="img/types-4.jpg" alt="Жалюзи плиссе" class="img-responsive center-block">
   					<h4>Жалюзи плиссе</h4>
   					<br>
   					<button class = "more_btn" data-toggle="modal" href="#more_pleated">Подробнее</button>
   					<button class = "order_btn" data-toggle="modal" href="#">Заказать</button>
   				</div>
   			</div>
   		</div>
   	</div>
   </section>

<section id="help">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-8 col-md-offset-2">
				<h3>Не знаете какие жалюзи выбрать?</h3>
				<br>
				<p>Оставьте заявку на консультацию и наш специалист подробно ответит <br>на все Ваши вопросы.Это бесплатно.</p>
				<br>
				<button id = "free_consult" data-toggle="modal" href="#">Бесплатная консультация
				</button>
			</div>
			<div class="col-md-2 col-sm-2">
				<img src="img/help_img.jpg" alt="Бесплатная консультация" class="img-responsive help_img center-block">
			</div>
		</div>
	</div>
</section>

<section id="portfolio">
	<div class="conteiner">
		<div class="row">
			<div class="section_header wow fadeInUp text-center">
				<h2>Наши работы</h2>
			</div>
		</div>
		<div class="row">
			<div class="slider">
				 <div class="fotorama" data-nav="thumbs" data-fit="cover">
                 	<img src="img/portfolio/1.jpg" alt="">
                 	<img src="img/portfolio/2.jpg" alt="">
                 	<img src="img/portfolio/3.jpg" alt="">
                 	<img src="img/portfolio/4.jpg" alt="">
                 	<img src="img/portfolio/5.jpg" alt="">
                 	<img src="img/portfolio/6.jpg" alt="">
                 	<img src="img/portfolio/7.jpg" alt="">
                 	<img src="img/portfolio/8.jpg" alt="">
                 	<img src="img/portfolio/9.jpg" alt="">
                 </div>
			</div>
		</div>
	</div>
</section>

<section id="offer">
	<div class="container">
		<div class="row">
			<div class="col-md-3 ">
				<img src="img/gift.jpg" alt="Подарок" class="img-responsive center-block gift">
			</div>
			<div class="col-md-9">
				<h4>Акция</h4>
				<br>
				<h3>закажите установку жалюзи до 29.11.2017</h3>
				<p>И получите в подарок москитную сетку для окна</p>
				<div class="row">
					<div class="col-md-4 col-sm-4">
						<form action="send.php" method="post"> <!--Привязываем send.php , данные будет передаваться с помошью метода пост-->
							<input type="hidden" name="what" value="Участвовать в акции"> <!-- input будет скрыт при помощи hidden-->
						<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
					</div>
					<div class="col-md-4 col-sm-4">
						<input name="phone" id="phone-1" type="text" required placeholder="Телефон..." class="form-control form_input"> <!--id="phone-1" что бы сделать маску ввода-->
					</div>
					<div class="col-md-4">
						<button type="submit">Заказать жалюзи</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="feedback">
	<div class="container">
		<div class="row">
			<div class="section_header wow fadeInUp	 text-center">
				<h2>Отзывы о нашей работе</h2>
			</div>
		</div>
		<div class="row">
			<div class="feedback_slider">

								<!-- Карусель -->
			<div id="myCarousel" class="carousel slide" data-interval="30000" data-ride="carousel">
			  <!-- Индикаторы для карусели -->
			  <ol class="carousel-indicators">
			    <!-- Перейти к 0 слайду карусели с помощью соответствующего индекса data-slide-to="0" -->
			    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			    <!-- Перейти к 1 слайду карусели с помощью соответствующего индекса data-slide-to="1" -->
			    <li data-target="#myCarousel" data-slide-to="1"></li>
			    <!-- Перейти к 2 слайду карусели с помощью соответствующего индекса data-slide-to="2" -->
			    <li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>   
			  <!-- Слайды карусели -->
			  <div class="carousel-inner">
			    <!-- Слайды создаются с помощью контейнера с классом item, внутри которого помещается содержимое слайда -->
			    <div class="active item">
			     <div class="row">
			     	<div class="col-sm-4">
			     		<div class="fotorama">
			     			<img src="img/feedback/1/1.jpg" alt="">
			     			<img src="img/feedback/1/2.jpg" alt="">
			     			<img src="img/feedback/1/3.jpg" alt="">
			     		</div>						
			     	</div>
			     	<div class="col-sm-8">
			     		<div class="row">
			     			<div class="col-md-2">
			     				<img src="img/avatar-1.jpg" alt="" class="img-circle center-block">  
			     			</div>
			     			<div class="col-md-10">
			     				<h5>Марина Забелина</h5>
			     				<a href="#">vk.com/id234242348</a>
			     			</div>
			     		</div>
			     		<div class="row">
			     			<div class="audio">
			     				<audio controls>
			     				<source src="audio/1.mp3" type="audio/mpeg"></audio>
			     			</div>
			     		</div>
			     		<div class="row">
			     			<p>Текст длинный.Равпавивмавмв ыва<br> 
			     			аиавиавиавиавсчмав  ав авпав ав ав<br>
			     		    авп авав ва в пав пав пав а ав павп.</p>
			     		</div>
			     	</div>
			     </div>
			    </div>
			    <!-- Слайд №2 -->
			    <div class="item">
			    <div class="row">
			     	<div class="col-md-4">
			     		<div class="fotorama">
			     			<img src="img/feedback/1/1.jpg" alt="">
			     			<img src="img/feedback/1/2.jpg" alt="">
			     			<img src="img/feedback/1/3.jpg" alt="">
			     		</div>						
			     	</div>
			     	<div class="col-md-8">
			     		<div class="row">
			     			<div class="col-md-2">
			     				<img src="img/avatar-2.jpg" alt="" class="img-circle center-block">  
			     			</div>
			     			<div class="col-md-10">
			     				<h5>Артем Бондарь</h5>
			     				<a href="#">vk.com/id234242348</a>
			     			</div>
			     		</div>
			     		<div class="row">
			     			<div class="audio">
			     				<audio controls>
			     				<source src="audio/1.mp3" type="audio/mpeg"></audio>
			     			</div>
			     		</div>
			     		<div class="row">
			     			<p>Текст длинный.Равпавивмавмв ыва<br> 
			     			аиавиавиавиавсчмав  ав авпав ав ав<br>
			     		    авп авав ва в пав пав пав а ав павп.</p>
			     		</div>
			     	</div>
			     </div>
			    </div>
			    <!-- Слайд №3 -->
			    <div class="item">
			      <div class="row">
			     	<div class="col-md-4">
			     		<div class="fotorama">
			     			<img src="img/feedback/1/1.jpg" alt="">
			     			<img src="img/feedback/1/2.jpg" alt="">
			     			<img src="img/feedback/1/3.jpg" alt="">
			     		</div>						
			     	</div>
			     	<div class="col-md-8">
			     		<div class="row">
			     			<div class="col-md-2">
			     				<img src="img/avatar-3.jpg" alt="" class="img-circle center-block">  
			     			</div>
			     			<div class="col-md-10">
			     				<h5>Стас Грищенко</h5>
			     				<a href="#">vk.com/id234242348</a>
			     			</div>
			     		</div>
			     		<div class="row">
			     			<div class="audio">
			     				<audio controls>
			     				<source src="audio/1.mp3" type="audio/mpeg"></audio>
			     			</div>
			     		</div>
			     		<div class="row">
			     			<p>Текст длинный.Равпавивмавмв ыва<br> 
			     			аиавиавиавиавсчмав  ав авпав ав ав<br>
			     		    авп авав ва в пав пав пав а ав павп.</p>
			     		</div>
			     	</div>
			     </div>
			    </div>
			  </div>
			  <!-- Навигация для карусели -->
			  <!-- Кнопка, осуществляющая переход на предыдущий слайд с помощью атрибута data-slide="prev" -->
			  <!--<a class="carousel-control left" href="#myCarousel" data-slide="prev">
			    <span class="glyphicon glyphicon-chevron-left"></span>
			  </a>
			  <!-- Кнопка, осуществляющая переход на следующий слайд с помощью атрибута data-slide="next" -->
			  <!--<a class="carousel-control right" href="#myCarousel" data-slide="next">
			    <span class="glyphicon glyphicon-chevron-right"></span>--> 
			  </a>
			</div>

			</div>
		</div>
	</div>
</section>
<footer id="contacts">
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-md-offset-1">
				<div class="map">
					
                 <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5a0266df7747177a5de700474d942debb5207d340193d863529fe273605bdd09&amp;width=100%25&amp;height=330&amp;lang=ru_UA&amp;scroll=true"></script>

				</div>
			</div>
			<div class="col-md-6">
				<h2>Контакты</h2>
				<div class="row">
					<address>
					<p id="address">
						Адрес:
					</p>
					<p id="kazan">
						Казань, ул. Серова 125, офис 324
					</p>
				</address>
				</div>
				<div class="row">
					<div class="phone_footer">
					<p id="phone_footer">
						Телефон:
					</p>
					<p id="namber">
						(099) 191-70-98
					</p>
				</div>
				</div>
				<div class="row social">
					<div class="social_icon">
				     <a  href=""><img src="img/vk.png" alt="Вконтакте"></a>
				 </div>
				 <div class="social_icon">
				     <a href=""><img src="img/insta.png" alt="Интсаграм"></a>
				 </div>
				     <button id="get_answer" data-toggle="modal" hraf="#get_question">
				     	Задать вопрос
				     </button>
				</div>
			</div> 
		</div>
		<div class="row details_row">
		<div class="col-md-4 details">
			<img src="img/logo-1.png" width = "130" height="30" alt="Логотип" class="img-responsive">
			<p>sdfsdfdsfdsf<br>
			   dsddcdscdscs</p>
		</div>
		<div class="col-md-4 policy">
			<a data-toggle="modal" href="#policy_modal">Политика конфиденциальности</a>
			<br>
			<p>Казань, 2013-2017</p>
		</div>
		<div class="col-md-4 Bondar">
			<h4>Сайт разработан:</h4>
			<a id="creator" href="vk.com/234324324">Bondar.ART</a>
		</div>
	</div>
</footer>

    <!-- Вызов замерщика -->
        <div class="modal fade" id="get_measurer_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body text-center"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal">
                	<h4>
                		Для вызова замерщика <br>оствьте свои данные 
                	</h4>
                </div>
               </div>
               <div class="row">
               	<form action="send.php" method="post">
               		<div class="col-xs-12"> <!--что бы была полная ширина окна -->
               			<input type="hidden" name="what" value="Вызов замерщика"> 
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-xs-12">
               			<input name="phone" id="phone-2" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-xs-12">
               			<button type="submit">Вызвать замершика</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>

         <!-- Подробние(Горизонтальные жалюзи) -->
        <div class="modal fade" id="more_horizontal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog big_modal"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal_info">
                	<h4>
                		Горизонтальные жалюзи
                	</h4>
                	<br>
                </div>
               </div>
               <div class="row">
               	<div class="col-sm-5">
               		<div class="fotorama" data-width="100%">
               			<img src="img/types-1.jpg" alt="">
               			<img src="img/types-2.jpg" alt="">
               			<img src="img/types-3.jpg" alt="">
               			<img src="img/types-4.jpg" alt="">
               		</div>
               	</div>
               	<div class="col-sm-7">
               		<p>
               			fdgfdgfdgfdfdfdg<br><br>Dfdgfdgdfgvfdv dfbfbfd
               			dfgfdbfd fgbdf fg  f f fg gf fggfbgfbgfngfgnf
               			fbfbgfnngf gf<br><br> fgbgfnfgn fgnbgfnfn fgngfnfdddd
               			dgvfdbvfdbdfbdv dfbfd fd dfb fd  dffdbfdgfdgvfd

               		</p>
               		<br>
               		<p><span> от 999 рублей</span></p>
               	</div>
               </div>
               <div class="row">
               	<form action="send.php" method="post">
               		<div class="col-sm-4"> 
               			<input type="hidden" name="what" value="Горизонтальные жалюзи">
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<input name="phone" id="phone-3" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<button type="submit">Заказать жалюзи</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>

          <!-- Подробние(Вертикальные жалюзи) -->
        <div class="modal fade" id="more_vertical" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog big_modal"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal_info">
                	<h4>
                		Вертикальные жалюзи
                	</h4>
                	<br>
                </div>
               </div>
               <div class="row">
               	<div class="col-sm-5">
               		<div class="fotorama" data-width="100%">
               			<img src="img/types-1.jpg" alt="">
               			<img src="img/types-2.jpg" alt="">
               			<img src="img/types-3.jpg" alt="">
               			<img src="img/types-4.jpg" alt="">
               		</div>
               	</div>
               	<div class="col-sm-7">
               		<p>
               			fdgfdgfdgfdfdfdg<br><br>Dfdgfdgdfgvfdv dfbfbfd
               			dfgfdbfd fgbdf fg  f f fg gf fggfbgfbgfngfgnf
               			fbfbgfnngf gf<br><br> fgbgfnfgn fgnbgfnfn fgngfnfdddd
               			dgvfdbvfdbdfbdv dfbfd fd dfb fd  dffdbfdgfdgvfd

               		</p>
               	</div>
               </div>
               <div class="row">
               	<form action="#">
               		<div class="col-sm-4"> 
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<input name="phone" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<button type="submit">Заказать жалюзи</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>

        <!-- Подробние(Рулонные жалюзи) -->
        <div class="modal fade" id="more_roll" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog big_modal"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal_info">
                	<h4>
                		Рулонные жалюзи
                	</h4>
                	<br>
                </div>
               </div>
               <div class="row">
               	<div class="col-sm-5">
               		<div class="fotorama" data-width="100%">
               			<img src="img/types-1.jpg" alt="">
               			<img src="img/types-2.jpg" alt="">
               			<img src="img/types-3.jpg" alt="">
               			<img src="img/types-4.jpg" alt="">
               		</div>
               	</div>
               	<div class="col-sm-7">
               		<p>
               			fdgfdgfdgfdfdfdg<br><br>Dfdgfdgdfgvfdv dfbfbfd
               			dfgfdbfd fgbdf fg  f f fg gf fggfbgfbgfngfgnf
               			fbfbgfnngf gf<br><br> fgbgfnfgn fgnbgfnfn fgngfnfdddd
               			dgvfdbvfdbdfbdv dfbfd fd dfb fd  dffdbfdgfdgvfd

               		</p>
               	</div>
               </div>
               <div class="row">
               	<form action="#">
               		<div class="col-sm-4"> 
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<input name="phone" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<button type="submit">Заказать жалюзи</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>

         <!-- Подробние(Плиссе жалюзи) -->
        <div class="modal fade" id="more_pleated" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog big_modal"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal_info">
                	<h4>
                		Плиссе жалюзи
                	</h4>
                	<br>
                </div>
               </div>
               <div class="row">
               	<div class="col-sm-5">
               		<div class="fotorama" data-width="100%">
               			<img src="img/types-1.jpg" alt="">
               			<img src="img/types-2.jpg" alt="">
               			<img src="img/types-3.jpg" alt="">
               			<img src="img/types-4.jpg" alt="">
               		</div>
               	</div>
               	<div class="col-sm-7">
               		<p>
               			fdgfdgfdgfdfdfdg<br><br>Dfdgfdgdfgvfdv dfbfbfd
               			dfgfdbfd fgbdf fg  f f fg gf fggfbgfbgfngfgnf
               			fbfbgfnngf gf<br><br> fgbgfnfgn fgnbgfnfn fgngfnfdddd
               			dgvfdbvfdbdfbdv dfbfd fd dfb fd  dffdbfdgfdgvfd

               		</p>
               	</div>
               </div>
               <div class="row">
               	<form action="#">
               		<div class="col-sm-4"> 
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<input name="phone" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-sm-4">
               			<button type="submit">Заказать жалюзи</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>

        <!-- Заказать(Горизонтальные жалюзи) -->
        <div class="modal fade" id="get_horizontal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body text-center"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal">
                	<h4>
                		Заказ жалюзи <br>оствьте свои данные 
                	</h4>
                </div>
               </div>
               <div class="row">
               	<form action="#">
               		<div class="col-xs-12"> <!--что бы была полная ширина окна -->
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-xs-12">
               			<input name="phone" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-xs-12">
               			<button type="submit">Заказать</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>

		<!-- Задать вопрос -->
		       <div class="modal fade" id="get_question" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-sm"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
              </div>
              <div class="modal-body text-center"> <!-- выравниваем все по центру -->
               <div class="row">
                <div class="header_modal">
                	<h4>
                		Заказ жалюзи <br>оствьте свои данные 
                	</h4>
                </div>
               </div>
               <div class="row">
               	<form action="#">
               		<div class="col-xs-12"> <!--что бы была полная ширина окна -->
               			<input name="name" type="text" required placeholder="Имя..." class="form-control form_input">
               		</div>
               		<div class="col-xs-12">
               			<input name="phone" type="text" required placeholder="Телефон..." class="form-control form_input">
               		</div>
               		<div class="col-xs-12">
               			<button type="submit">Заказать</button>
               		</div>	
               	</form>
               </div>
               </div>
            </div>
          </div>
        </div>


		          <!-- Политика конфиденциальности -->
        <div class="modal fade" id="policy_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog"> <!-- размеры-->
            <div class="modal-content"> <!--  сама белая область  -->
              <div class="modal-header"> <!-- находится заголовок -->
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <!-- кнопка закрытия--> 
                <h4 class="modal-title">
                	Политика конфиденциальности 
                </h4>
               </div>
              <div class="modal-body policy-modal">
              <ul>
              	<p>
              		iul
              		dshgkjdfgfhf
              		dfgfdgfdgdgfdh65ejnyul
              		ui
              		l
              	</p>
              	<h4>
              		djfivgtrhgthtrhbtrhtrhtrdfbdfbdfbf
              		fdbvfdbfdbfdf fd gf dgf dgfdgfdg</h4>
              		<p>
              			ergrthrthtrhtr
              			hththtr
              			htrhtr
              			htrbtrtrhrth
              			r
              		</p>
              		</ul>
              		</div>
              		<div class="modal-footer">
              			<button type ="close" class = "btn-defoult" data-dismss = "modal">Закрыть</button></div>
              	  </div>
               </div>
            </div>

         

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --><!-- Подклчена библиотека jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script> <!-- Подключен стандартный файл bootstrap -->
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/wow.min.js"></script>   <!-- Подклчена библиотека для анимации -->
    <script>
    // Инициируем за рание файл wow.min.js
      new WOW().init();  
    </script>
    <!-- // скрипт для закрипления меню при прокрутке --> 
<script>
var h_hght = 110; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                 
$(function(){
 
    var elem = $('#top_nav');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });
 
});
</script>
<!-- ////
// плавный скролл до якоря  -->
<script>
	$(document).ready(function(){
	$("#top_nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
});
</script>
<!--     /////////
    // плавный скролл до якоря --> 
<script>
	$(document).ready(function(){
	$(".main_buttons").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});
});
</script>
<!-- ///////// -->
    <script>
       $(document).ready(
          function() {
              $("html").niceScroll({cursorcolor:"#000"}); 
               // Инициализация документ jquery.nicescroll
          }
      );
    </script>
    <!-- // подключаем файл -  animate.css -->
    <link rel="stylesheet" href="css/animate.css">

    <link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->
  </body>
</html>