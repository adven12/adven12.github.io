


	// плавный переход по страничкам
$(document).ready(function(){ 
  var body = $("body"); 
  body.fadeIn(400); 
  $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto'])", function(e) { 
  e.preventDefault(); 
  $("body").fadeOut(400); 
  var self = this;
  setTimeout(function () { 
    window.location.href = $(self).attr("href"); 
  }, 400); 
  });
}); 




//Фиксация блока при прокрутке  

var h_hght = 195; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                 
$(function(){
 
    var elem = $('#top_nav');
    var top = $(this).scrollTop();
     
    if(top > h_hght){elem.css('top', h_mrg);
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
   


   document.write('<div id="header_date"></div>');
   document.write('<div id = "modal_develop"></div>');
   document.write('<div id = "modal_develop_2"></div>');
   document.write('<div id = "modal_develop_3"></div>');
   document.write('<div id = "modal_develop_4"></div>');
   document.write('<div id = "modal_develop_5"></div>');
   document.write('<div id = "modal_develop_6"></div>');
          //var t = 1;
           var 	arr = ['January','February','March', 'April','May','June','July','August','September','October','November','December'];
           mainDate = new Date();
           myDate = mainDate.getDate(); 
           mainMonth = new Date();
           myMonth = mainMonth.getMonth();
      // не удалять
           document.getElementById("header_date").innerHTML = '<h3 ><a href="#" data-toggle="modal" data-target="#celebration" style="color:#B00000;">' + myDate + '</a> &nbsp;<a href="test_calendar.html">' + arr[myMonth] + '</a></h3>';    
          
       if(arr[myMonth] == 'January' && myDate == 1){
        	 document.getElementById("modal_develop").innerHTML = '<h4>Новый год</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('#');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 3){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>День рождения соломинки для коктейлей</h4></a><hr />';
         $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3187/');
              });
        }else
          if(arr[myMonth] == 'January' && myDate == 4){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>День Ньютона</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3057/');
              });
            }
        else
        	 if(arr[myMonth] == 'January' && myDate == 5){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный разгрузочный день</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3422/');
              });
            }
        else
        	 if(arr[myMonth] == 'January' && myDate == 7){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Рождество Христово</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('#');
              });
            }
        else
        	 if(arr[myMonth] == 'January' && myDate == 8){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>День рождения<br />Маши Сергиенко</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('#');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 11){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день «спасибо»</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1804/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 16){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Всемирный день «The Beatles»</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2974/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 17){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>День детских изобретений</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('"http://www.calend.ru/holidays/0/0/3061/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 21){
        	 $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день снега</h5></a><hr />');
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>Международный день объятий</h5></a><hr />';
             document.getElementById("modal_develop_3").innerHTML = '<a href="#" style="color:#000000;"><h5>Всемирный день религии</h5></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3105/');
              });
              $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/7/');
              });
               $("#modal_develop_3").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3062/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 23){
        	document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>День рождения Юрка</h5></a><hr />';
            document.getElementById("modal_develop_2").innerHTML = '<a href="# style="color:#000000;"><h5>День ручного письма<br />(День почерка)</h5></a><hr />';
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3063/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 25){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день эскимо</h4></a><hr />';
            document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h4>День студента №2</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3224/');
              });
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3224/');
              });
            }
        else

            if(arr[myMonth] == 'January' && myDate == 26){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>День рожднния Вики</h5></a><hr /><hr />';
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>Международный день таможенника</h5></a><hr />';
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/10/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 28){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>Международный день<br />БЕЗ интернета</h5></a><hr />';
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>Международный день защиты<br /> персональных данных</h5></a><hr />';
             document.getElementById("modal_develop_3").innerHTML = '<a href="#" style="color:#000000;"><h5>День рождения<br />Сани</h5></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3190/');
              });
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3066/');
              });
            }
        else
        	if(arr[myMonth] == 'January' && myDate == 29){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>День рождения<br />Катюхи Трифанкиной</h5></a><hr />';
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>День мобилизации против<br />угрозы ядерной войны</h5></a><hr />';
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3053/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 2){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Всемирный день<br />водно-болотных угодий</h4></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1868/');
              });
            }
        else
            if(arr[myMonth] == 'February' && myDate == 4){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>День рождения<br />Бати</h5></a><hr /><a href="#" style="color:#000000;"><h5>День рождения<br />брата Кирюхи</h5></a><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('#');
              });
            }
        else
        	 if(arr[myMonth] == 'February' && myDate == 6){
        	  document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день<br />бармена</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1319/');
              });
            }
        else
        	 if(arr[myMonth] == 'February' && myDate == 7){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>День рождения<br />Машки Камыниной</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('#');
              });
            }
        else
        	 if(arr[myMonth] == 'February' && myDate == 9){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день<br />стоматолога</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1857/');
              });
            }
        else
            if(arr[myMonth] == 'February' && myDate == 11){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>День рождения<br />М А М Ы</h4><hr />';
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>Всемирный день больного</h5>';
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/14/');
              });
            }
        else
        	 if(arr[myMonth] == 'February' && myDate == 12){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день<br />брачных агентств</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2888/');
              });
            }
        else
        	 if(arr[myMonth] == 'February' && myDate == 13){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>Всемирный день радио</h5><hr />';
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>«Жирный вторник»</h5>';
              $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2924/');
              });
               $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/943/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 14){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>День святого Валентина</h5><hr />';
             document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>Международный день<br />дарения книг</h5><hr />';
             document.getElementById("modal_develop_3").innerHTML = '<a href="#" style="color:#000000;"><h5>День компьютерщика</h5><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/15/');
              });
              $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3347/');
              });
               $("#modal_develop_3").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2369/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 15){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>У кого-то др</h5><hr />';
              document.getElementById("modal_develop_2").innerHTML = '<a href="#" style="color:#000000;"><h5>Международный день детей,<br />больных раком</h5><hr />';
             $("#modal_develop_2").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3071/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 17){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h5>День спонтанного проявления доброты</h5>';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/927/');
              });
            }
        else
            if(arr[myMonth] == 'February' && myDate == 19){
             document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Всемирный день защиты морских<br />млекопитающих (День кита)</h4>';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3054/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 21){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Всемирный день экскурсовода</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2994/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 22){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день поддержки<br />жертв преступлений</h4><hr />';
              $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/922/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 26){
        	 document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Всемирный день неторопливости</h4><hr />';
             $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3286/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 27){
    	  	  document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день<br />полярного медведя</h4><hr />';
              $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3082/');
              });
            }
        else
        	if(arr[myMonth] == 'February' && myDate == 28){
        	  document.getElementById("modal_develop").innerHTML = '<a href="#" style="color:#000000;"><h4>Международный день редких заболеваний</h4><hr />';
              $("#modal_develop").on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3070/');
              });
            }
        else
            if(arr[myMonth] == 'March' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день комплимента</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3351/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день гражданской обороны</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/17/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 2){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день спички</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3231/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 3){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день писателя</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/446/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день охраны здоровья уха и слуха</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3085/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день детского телевидения и радиовещания</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/118/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 5){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Кати Редькиной</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День рождения Макса Мирненко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день зубного врача</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2893/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный женский день</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/18/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день почки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3353/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 9){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день ди-джея</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1512/');
              });
            }
       else
            if(arr[myMonth] == 'March' && myDate == 12){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День Содружества наций 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/388/');
              });
            }
       else
        if(arr[myMonth] == 'March' && myDate == 14){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день рек (Международный день действий против плотин)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1914/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день числа «Пи»</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1919/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день защиты прав потребителей</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/20/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день защиты бельков</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3055/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Софии Шевченко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день сна 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2721/');
              });
            }
       else
          if(arr[myMonth] == 'March' && myDate == 17){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Игорька Сидорко</h4><hr />').on("click",function(){
              return !window.open('#');
              });
               $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h4>День Святого Патрика</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }

       else
        if(arr[myMonth] == 'March' && myDate == 18){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День Парижской коммуны</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/964/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Владоса Алдошина</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день клиента</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3046/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 20){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Веталя Бича</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День Земли</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3058/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>День весеннего равноденствия 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1176/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день астрологии 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1923/');
              });
            
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день социальной работы 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3355/');
              });
            
             $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день без мяса</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2998/');
              });
            }
       else
        if(arr[myMonth] == 'March' && myDate == 21){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день поэзии</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/24/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день кукольника</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1925/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 22){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День Балтийского моря</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/449/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день таксиста</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3021/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 24){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Час Земли 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3060/');
              });
            }
       else
         if(arr[myMonth] == 'March' && myDate == 25){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Никиты Малышаков</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'March' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Фиолетовый день (День больных эпилепсией)</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3138/');
              });
            }
       else
        if(arr[myMonth] == 'March' && myDate == 27){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Миши Ковалевского</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день театра</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/26/');
              });
            }
       else
        if(arr[myMonth] == 'March' && myDate == 31){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день резервного копирования (День бэкапа)</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2897/');
              });
            }
       else
        if(arr[myMonth] == 'April' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День смеха (День дурака)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/28/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день птиц</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3036/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 2){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день детской книги</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/30/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Winners Like Spinners проходят во второй раунд или лёд тронулся господа!</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3036/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Димон придумал создать свою батл площядку в хаи)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3036/');
              });
              $("#modal_develop_4").html('<a href="#" style="color:#000000;"><h5>В Атырке случился потоп</h5><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
          if(arr[myMonth] == 'April' && myDate == 3){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день вечеринки</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3362/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Влада Цокура</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День веб-мастера</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3101/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день крысы</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3232/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 5){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день супа</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3364/');
              });
               $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День рождения нашего театра</h5><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'April' && myDate == 6){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день настольного тенниса</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3292/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день цыган</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/31/');
              });
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Пасха</h5><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 10){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день движения сопротивления</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2899/  ');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День братьев и сестер</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3358/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 11){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день освобождения узников фашистских концлагерей</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1007/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 12){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день авиации и космонавтики (Международный день полета человека в космос)</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/32/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h4>трєш театр "Чушь и я" 16:00 210 УЛК</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/32/');
              });
            }
       else
        if(arr[myMonth] == 'April' && myDate == 13){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день рок-н-ролла</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2901/');
              });
               $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h4>2 тур Золотого Байта</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2901/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 14){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Тотальный диктант 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3294/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день культуры</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3235/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День экологических знаний</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3064/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Поминальные дни в снг</h5><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'April' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Лига смеха 18:00 акт залл</h4><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h4>Поминальные дни в снг</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 17){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день гемофилии</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2598/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 18){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день памятников и исторических мест</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/537/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день радиолюбителя</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2689/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День подснежника</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3065/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Ярмарка вакансий 10:00 - 15:00</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3065/');
              });
            }
       else
        if(arr[myMonth] == 'April' && myDate == 21){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день цирка 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3236/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День астрономии 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/202/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Хакатон 9:30</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/202/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 24){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день солидарности молодежи</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/539/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день защиты лабораторных животных</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3068/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 25){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный День ДНК</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3202/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День дочери</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3366/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день секретаря 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/724/');
              });
            }
       else
           if(arr[myMonth] == 'April' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день памяти жертв радиационных аварий и катастроф</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1755/');
              });
            }
       else
           if(arr[myMonth] == 'April' && myDate == 27){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Стасона Грищенко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День рождения Деда</h5><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 28){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день Тай-цзи и Цигун 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/536/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день ветеринарного врача 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3144/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 29){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный (Всемирный) день танца</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/34/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день породненных городов 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/540/');
              });
            }
       else
         if(arr[myMonth] == 'April' && myDate == 30){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День народження Олени Ковальчук</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день джаза</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3088/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день свечника</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3365/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Праздник труда (День труда)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/37/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день борьбы с астмой 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3368/');
              });
            }
       else
          if(arr[myMonth] == 'May' && myDate == 3){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День Звездных войн</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3369/');
              });
            }
       else
           if(arr[myMonth] == 'May' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день Солнца</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2023/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 5){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Марины Мотричко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День рождения Леры Ломовой</h5><hr />').on("click",function(){
              return !window.open('#');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день борьбы за права инвалидов</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1556/');
              });
               $("#modal_develop_4").html('<a href="#" style="color:#000000;"><h5>Международный день акушерки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3042/');
              });
            }
       else
        if(arr[myMonth] == 'May' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный День Красного Креста и Красного Полумесяца</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/203/');
              });
            }
       else
        if(arr[myMonth] == 'May' && myDate == 9){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День Победы</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/40/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 10){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Серого Шевченко</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 12){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день медицинской сестры</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/41/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день справедливой торговли 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2610/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>День экологического образования</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3114/');
              });
            }
       else
        if(arr[myMonth] == 'May' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день климата</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3115/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День лакоманьяка</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3340/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день отказника</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3047/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День биографов</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2904/');
              });
            }
       else
          if(arr[myMonth] == 'May' && myDate == 17){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день борьбы с гомофобией</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2436/');
              });
               $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h4>Мой первый поцелуй и прикосновение к вагине</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2436/');
              });
            }

       else
           if(arr[myMonth] == 'May' && myDate == 18){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день музеев</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/45/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День Розовой Пантеры</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3238/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>1000 одна ночь!</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3238/');
              });
               $("#modal_develop_4").html('<a href="#" style="color:#000000;"><h4>Мой первый поцелуй и прикосновение к вагине</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2436/');
              });
            }
       else
           if(arr[myMonth] == 'May' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День уличной музыки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/45/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 20){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Денчика Нерози</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день памяти жертв СПИДа 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3090/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 22){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Виталины Тимощук</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 23){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день черепахи</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3043/');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 25){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день пропавших детей</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3205/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День полотенца</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3240/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день щитовидной железы</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2973/');
              });
            }
       else
        if(arr[myMonth] == 'May' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День ХАИ</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'May' && myDate == 29){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день миротворцев ООН</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1880/');
              });
            }
       else
          if(arr[myMonth] == 'May' && myDate == 31){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день блондинок</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2065/');
              });
            }
       else
          if(arr[myMonth] == 'June' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день детей (День защиты детей)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/51/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день молока</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3074/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>День когда я был на волоске от секса (с Викой))<h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3074/');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 2){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день очистки водоемов 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3120/');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 3){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день друзей</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1378/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день архивов</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3244/');
              });
               $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>ВМеждународный день аккредитации</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2618/');
              });
            }
       else
        if(arr[myMonth] == 'June' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Первый день Стаса на работе в конторе))</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1378/');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 12){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Андрея Злаги</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 14){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день блогера</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3038/');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день ветра</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3154/');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 18){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день мотоциклиста 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3092/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День когда я отказался от подработки в Болгарии</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3092/');
              });

            }
       else
          if(arr[myMonth] == 'June' && myDate == 21){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Маши Баранник</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/51/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день скейтбординга</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2462/');
              });
            }
       else
        if(arr[myMonth] == 'June' && myDate == 23){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Лева Слабуна</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/51/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный Олимпийский день</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2099/');
              });
            }
       else
        if(arr[myMonth] == 'June' && myDate == 25){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День дружбы и единения славян</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/551/');
              });
            }
       else
         if(arr[myMonth] == 'June' && myDate == 27){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день рыболовства</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/57/');
              });
            }
       else
        if(arr[myMonth] == 'June' && myDate == 28){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Ленки Бачуриной</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/57/');
              });
            }
       else
         if(arr[myMonth] == 'July' && myDate == 2){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день спортивного журналиста</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/58/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день НЛО (День уфолога)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3016/');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Лизы Ткаченко</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 6){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день поцелуя</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/905/');
              });
            }
       else
         if(arr[myMonth] == 'July' && myDate == 7){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день Днепра 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3080/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Иван Купала</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/206/');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 11){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день шоколада</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2485/');
              });
            }
       else
         if(arr[myMonth] == 'July' && myDate == 14){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Сани Кареева</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
          if(arr[myMonth] == 'July' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Марка Браги</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 17){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день международного уголовного правосудия</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3387/');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 20){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день шахмат</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/61/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный День Торта</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3209/');
              });
            }
       else
          if(arr[myMonth] == 'July' && myDate == 25){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Надежди Анатолиевни</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Андрея Мотричко</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'July' && myDate == 27){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День системного администратора 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/136/');
              });
            }
       else
         if(arr[myMonth] == 'July' && myDate == 28){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день борьбы с гепатитом</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3089/');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 29){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день тигра</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3160/');
              });
            }
       else
        if(arr[myMonth] == 'July' && myDate == 31){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день рейнджера</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3389/');
              });
            }
       else
         if(arr[myMonth] == 'August' && myDate == 3){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день пива 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3250/');
              });
            }
       else
        if(arr[myMonth] == 'August' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Стаса Пивовара</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'August' && myDate == 6){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день «Врачи мира за мир»</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/572/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День памяти жертв атомной бомбардировки Хиросимы</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2953/');
              });
            }
       else
        if(arr[myMonth] == 'August' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день альпинизма (День альпиниста)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3039/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день кошек</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3251/');
              });
            }
       else
          if(arr[myMonth] == 'August' && myDate == 10){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день биодизеля</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3392/');
              });
            }
       else
        if(arr[myMonth] == 'August' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Димона Кошкарева</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День археолога</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/68/');
              });
            }
       else
         if(arr[myMonth] == 'August' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Ромы Вербицкого</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3392/');
              });
            }
       else
          if(arr[myMonth] == 'August' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день фотографии</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3252/');
              });
            }
       else
        if(arr[myMonth] == 'August' && myDate == 31){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Алёны Руденковой</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День блога</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3020/');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День знаний</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/70/');
              });
            }
       else
        if(arr[myMonth] == 'August' && myDate == 31){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Алёны Руденковой</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День блога</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3020/');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Денчика Элитского</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 5){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Жеки Элитского</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день оказания первой медицинской помощи 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3171/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день солидарности журналистов</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/576/');
              });
            }
       else
        if(arr[myMonth] == 'September' && myDate == 9){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день красоты</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/73/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День памяти жертв фашизма 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2160/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день журавля 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3125/');
              });
            }
       else
        if(arr[myMonth] == 'September' && myDate == 11){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Алёны Сидоровой</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 13){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Макса Рожко</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Вовы Легкобыта</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'September' && myDate == 18){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день мониторинга воды</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3395/');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения «Смайлика»</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2225/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день подражания пиратам</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2218/');
              });
            }
       else
        if(arr[myMonth] == 'September' && myDate == 21){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день распространения информации о болезни Альцгеймера</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3253/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Неделя Всемирной акции «Мы чистим мир» («Очистим планету от мусора»)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3126/');
              });
            }
       else
        if(arr[myMonth] == 'September' && myDate == 22){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день без автомобиля</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2540/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день защиты слонов</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3255/');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Европейский день языков</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/757/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день контрацепции</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2547/');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 29){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день сердца</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2787/');
              });
            }
       else
         if(arr[myMonth] == 'September' && myDate == 30){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день переводчика»</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2225/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день глухих 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2218/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День машиностроителя 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2218/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День рождения Макса Мельника</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2218/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день музыки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/80/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день вегетарианства</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3257/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день архитектуры 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1484/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день врача 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3260/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 2){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Анастасии Сусловец</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день социального педагога</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2965/');
              });
            }
       else
          if(arr[myMonth] == 'October' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день животных/h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/81/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 5){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Альбины Падалки</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день улыбки 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2965/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 6){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день охраны мест обитаний/h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/720/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 7){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международные дни наблюдения птиц 2018/h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3127/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 10){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день борьбы со смертной казнью/h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3400/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 11){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день зрения 2018/h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2788/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 12){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Димона Геращенко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день борьбы с артритом</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3263/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день яйца 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2551/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 14){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день стандартов/h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/585/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день белой трости</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2552/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день мытья рук</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3044/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 16){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день хлеба</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3323/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день анестезии (День анестезиолога)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2255/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>День Шефа (День Босса)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1503/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Тани Алёшкиной/h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 20){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Анастасии Дьяченко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день повара</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2909/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день борьбы с остеопорозом</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3325/');
              });
            }
       else
        if(arr[myMonth] == 'October' && myDate == 22){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день заикающихся людей</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2552/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 23){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день снежного барса</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3402/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День осведомленности о синдроме кабуки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3403/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 28){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день анимации</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2273/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день тёщи 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3302/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 29){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день борьбы с инсультом</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3027/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день псориаза</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3405/');
              });
            }
       else
         if(arr[myMonth] == 'October' && myDate == 31){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день Черного моря</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2552/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день вегана</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1471/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 3){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день мужчин 2018</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/167/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день КВН</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/205/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день качества 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/168/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Всемирный день юзабилити 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2553/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 9){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день против фашизма, расизма и антисемитизма</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/891/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день антиядерных акций</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3129/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 10){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Международный день бухгалтерии (День бухгалтера)</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2661/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день молодежи</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/592/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 11){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день шопинга</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3265/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день энергосбережения</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3130/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 12){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день борьбы с пневмонией</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3030/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 13){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день доброты</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3272/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день слепых</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/99/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 14){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день логопеда</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3267/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День вторичной переработки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3131/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>День вторичной переработки</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1563/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 17){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день студентов</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1545/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный мужской день</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3078/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 21){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Тани Демченко</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день приветствий</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/108/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 23){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Черная пятница 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3277/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день отказа от покупок 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3017/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 25){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Михи Максакова</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Киберпонедельник 2018</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3279/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Всемирный день информации</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/111/');
              });
              $("#modal_develop_3").html('<a href="#" style="color:#000000;"><h5>Международный день сапожника</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3278/');
              });
            }
       else
        if(arr[myMonth] == 'November' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день сострадания</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3417/');
              });
            }
       else
         if(arr[myMonth] == 'November' && myDate == 30){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>Всемирный день домашних животных</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3219/');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день защиты информации</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1607/');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 1){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Боди Родько</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'December' && myDate == 2){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День 2D-художников</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3203/');
              });
            }
       else
         if(arr[myMonth] == 'December' && myDate == 4){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День заказов подарков и написания писем Деду Морозу</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3280/');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 8){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день художника</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3338/');
              });
            }
       else
         if(arr[myMonth] == 'December' && myDate == 9){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День рождения Димона Элитского</h4><hr />').on("click",function(){
              return !window.open('https://rt.pornhub.com');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 10){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Всемирный день футбола</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/1734/');
              });
            }
       else
         if(arr[myMonth] == 'December' && myDate == 11){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день танго</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2566/');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 15){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день чая</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2667/');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 17){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день защиты секс-работников от насилия и жестокости</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2568/');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 19){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h5>День рождения Насти Сикорской</h5><hr />').on("click",function(){
              return !window.open('#');
              });
              $("#modal_develop_2").html('<a href="#" style="color:#000000;"><h5>Международный день помощи бедным</h5><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/120/');
              });
            }
       else
         if(arr[myMonth] == 'December' && myDate == 23){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День народження Ілони Ношиной</h4><hr />').on("click",function(){
              return !window.open('#');
              });
            }
       else
         if(arr[myMonth] == 'December' && myDate == 26){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>День подарков</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/3180/');
              });
            }
       else
        if(arr[myMonth] == 'December' && myDate == 28){
              $("#modal_develop").html('<a href="#" style="color:#000000;"><h4>Международный день кино</h4><hr />').on("click",function(){
              return !window.open('http://www.calend.ru/holidays/0/0/2353/');
              });
            }
       else
   
         // тоже не удалять(не знаю по чему)
        {
        document.getElementById("header_date").innerHTML = '<h3 ><a href="#">' + myDate + '</a> &nbsp;<a href="test_calendar.html">' + arr[myMonth] + '</a></h3>';
        }
   