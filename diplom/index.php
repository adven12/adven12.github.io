<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">         <!--отбражать страницу в мастабе 100% -->
    <meta http-equiv="content-type" content="text/html; charset=windows-1251" /> <!--корректная Загрузка файлов с сервера на русском-->
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>Спец</title>

    <!-- Bootstrap --> <!-- файлы стилей -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css"><!--Содержит все необходимыи иконки-->
 
<?php
$path = "/docs/Lecture_1.pdf";
$file = basename($path);         // $file содержит "tezisy3.pdf"
$file = basename($path, ".pdf"); // $file содержит "tezisy3"
?>
     
   </head>
  <body>

    <header>
       <div class="row">
       <div class="col-lg-1 col-md-1 col-sm-1" id="click_back"><a href="#"><img src="img/back.png" alt="Назад" class="back"></a></div>
       <div class="container">
        <div class="col-xl-9 col-lg-9 col-md-11 col-sm-11">
          <div class="section_header text-center">
          <a href="#"><h3 class="ru name">Информационная поддержка по курсу "Специальное программное обеспечение информационных технологий" </h3></a>
          <a href="#"><h3 class="ua name">Інформаційна підтримка по курсу "Спеціальне програмне забезпечення інформаційних технологій" </h3></a>
          <a href="#"><h3 class="eng name" id="eng_name">Information support for the course "Special Information Technology Software" </h3></a>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 multilanguage">
          <a href="#"><p class="card wow" data-wow-delay="0.2s" id="Ru">Рус</p></a>
          <a href="#"><p class="card wow" data-wow-delay="0.2s" id="Ua">Укр</p></a>
          <a href="#"><p class="card wow" data-wow-delay="0.2s" id="Eng">Eng</p></a>
        </div>
       </div>
       </div>
       <hr class="container">
    </header>

    <section id="content_1">
      <div class="container">
      <div class="row text-center">
        <div class="col-md-6">
          <div class="card wow bounceInUp entry" data-wow-delay="0.2s">
            <div class="formas">
            <h4 class="ru">Преподаватель</h4>
            <h4 class="ua">Викладач</h4>
            <h4 class="eng">Teacher</h4>
            <br>
            <input type="password"  name="password" id="password" class="text-center">
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card wow bounceInUp entry student" data-wow-delay="0.4s">
            <h4  class="ru stud">Студент</h4>
            <h4  class="ua stud">Студент</h4>
            <h4  class="eng stud">Student</h4>
            <br>
          </div>
        </div>
      </div>
      </div>
    </section>



  <section id="content_2">
       <div class="container">
      <div class="row text-center">
        <div class="col-md-3">
          <div class="card wow bounceInUp lectures" data-wow-delay="0.2s">
            <h4 class="ru">Лекции</h4>
            <h4 class="ua">Лекції</h4>
            <h4 class="eng">Lectures</h4>
            <br>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card wow bounceInUp labs" data-wow-delay="0.4s">
            <h4 class="ru">Лабы</h4>
            <h4 class="ua">Лаби</h4>
            <h4 class="eng">Labs</h4>
            <br>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card wow bounceInUp typical_tasks" data-wow-delay="0.6s">
            <h4 class="ru">Типичные задачи</h4>
            <h4 class="ua">Типові завдання</h4>
            <h4 class="eng">Typical tasks</h4>
            <br>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card wow bounceInUp assessment" data-wow-delay="0.8s">
          <h4 class="ru">Оценки</h4>
          <h4 class="ua">Оцінки</h4>
          <h4 class="eng">Assessment</h4>
            <br>
          </div>
        </div>
      </div>
       </div>
  </section>

    <section id="content_3" class="ru">
      <div id="lec" >  <!-- блок данных по лекциям  -->
      <div class="container">

      <!-- вкладка лекции  -->
      <div class="row text-left lectures-doc">
        <?php
           // загрузка новых файлов  
           // запись всех файлов с папки в массив 
          $featured_dir = 'docs_ru/lectures_ru/doc/';
          $scan = scandir($featured_dir);

      echo '<form action="index.php" name="upload_lectures-doc" method="post" enctype="multipart/form-data" id="form1">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="lecture_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" download><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/lectures_ru/doc/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf, .dwg" name="im" id="flb1" class="input_change plus_block">
              <p><input type="submit" onclick="runFileCheck(1,\'lectures_ru\'); return false;" name="upload_lectures-doc" value="Загрузить" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      <div class="row text-left lectures-pdf">
        <?php
// <input type="file" accept=".xls,.xlsx" />  $file = basename($path); // $file содержит "tezisy3.pdf" $file = basename($path, ".pdf"); // $file содержит "tezisy3"
          $featured_dir = 'docs_ru/lectures_ru/pdf/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload_lectures-pdf" method="post" enctype="multipart/form-data"  id="form2">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {              
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="lecture_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" target="_blank"><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/lectures_ru/pdf/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" name="im" accept=".doc, .docx, .pdf, .dwg" id="flb2" class="input_change plus_block">
              <p><input type="submit" name="upload_lectures-pdf" value="Загрузить" class="plus_block" id="input_load" onclick="runFileCheck(2,\'lectures_ru\');return false;"></p>
       </form>';
        ?>
      </div>

      </div>
      </div>

      <div id="lab">  <!-- блок данных по лабам  -->
      <div class="container">

      <!-- вкладка лекции  -->
      <div class="row text-left labs-doc">
        <?php
           // загрузка новых файлов  
           // запись всех файлов с папки в массив 
          $featured_dir = 'docs_ru/labs_ru/doc/';
          $scan = scandir($featured_dir);

      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data"  id="form3">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                           echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="labs_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" download><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/labs_ru/doc/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb3" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(3,\'labs_ru\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      <div class="row text-left labs-pdf">
        <?php

          $featured_dir = 'docs_ru/labs_ru/pdf/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data" id="form4">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="labs_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" target="_blank"><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/labs_ru/pdf/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb4" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(4,\'labs_ru\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      </div>
      </div>

       <div id="typ">  <!-- блок данных по типичным задачам  -->
      <div class="container">

      <!-- вкладка лекции  -->
      <div class="row text-left typical_tasks-doc">
        <?php
           // загрузка новых файлов  
           // запись всех файлов с папки в массив 
          $featured_dir = 'docs_ru/typical_tasks_ru/doc/';
          $scan = scandir($featured_dir);

      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data" id="form5">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="typical_tasks_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" download><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/typical_tasks_ru/doc/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb5" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(5, \'typical_tasks_ru\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      <div class="row text-left typical_tasks-pdf">
        <?php

          $featured_dir = 'docs_ru/typical_tasks_ru/pdf/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data" id="form6">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="typical_tasks_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" target="_blank"><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/typical_tasks_ru/pdf/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb6" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(6, \'typical_tasks_ru\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>
    
      </div>
      </div>

       <div id="asses">  <!-- блок данных по оценкам  -->
      <div class="container">
      <div class="row text-left assessment-xls">
        <?php

          $featured_dir = 'docs_ru/assessment_ru/xls/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data" id="form7">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="assessment_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" download><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/assessment_ru/xls/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf, .xls, .xlsx" name="im" id="flb7" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(7, \'assessment_ru\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

       <div class="row text-left  assessment-pdf">
        <?php

          $featured_dir = 'docs_ru/assessment_ru/pdf/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data" id="form8">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="assessment_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" target="_blank"><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/assessment_ru/pdf/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb8" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(8, \'assessment_ru\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      
      </div>
      </div>
    </section>

    <section id="content_4" class="ru">
      <div class="container format-files">
      <div class="row text-right " id="format-files-lectures">
         <p>Расширение файлов:</p>
         <a href="#"><img src="img/doc.png" alt="doc" id="lectures_doc_files"></a>
         <a href="#"><img src="img/pdf.png" alt="pdf" id="lectures_pdf_files"></a>
      </div>
      <div class="row text-right " id="format-files-labs">
         <p>Расширение файлов:</p>
         <a href="#"><img src="img/doc.png" alt="doc" id="labs_doc_files"></a>
         <a href="#"><img src="img/pdf.png" alt="pdf" id="labs_pdf_files"></a>
      </div>
      <div class="row text-right " id="format-files-typical_tasks">
         <p>Расширение файлов:</p>
         <a href="#"><img src="img/doc.png" alt="doc" id="typical_tasks_doc_files"></a>
         <a href="#"><img src="img/pdf.png" alt="pdf" id="typical_tasks_pdf_files"></a>
      </div>
      <div class="row text-right " id="format-files-assessment">
         <p>Расширение файлов:</p>
         <a href="#"><img src="img/pdf.png" alt="pdf" id="assessment_pdf_files"></a>
         <a href="#"><img src="img/xls.png" alt="xls" id="assessment_xls_files"></a>
      </div>
       </div>
    </section>




 <section id="content_3_ua" class="ua">
      <div id="lec_ua" >  <!-- блок данных по лекциям  -->
      <div class="container">

      <!-- вкладка лекции  -->
      <div class="row text-left lectures-doc">
        <?php
           // загрузка новых файлов  
           // запись всех файлов с папки в массив 
          $featured_dir = 'docs_ru/lectures_ua/doc/';
          $scan = scandir($featured_dir);

      echo '<form action="index.php" name="upload_lectures-doc" method="post" enctype="multipart/form-data" id="form1">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="lecture_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" download><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/lectures_ua/doc/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf, .dwg" name="im" id="flb1" class="input_change plus_block">
              <p><input type="submit" onclick="runFileCheck(1,\'lectures_ua\'); return false;" name="upload_lectures-doc" value="Загрузить" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      <div class="row text-left lectures-pdf">
        <?php
          $featured_dir = 'docs_ru/lectures_ua/pdf/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload_lectures-pdf" method="post" enctype="multipart/form-data"  id="form2">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {              
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="lecture_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" target="_blank"><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/lectures_ua/pdf/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" name="im" accept=".doc, .docx, .pdf, .dwg" id="flb2" class="input_change plus_block">
              <p><input type="submit" name="upload_lectures-pdf" value="Загрузить" class="plus_block" id="input_load" onclick="runFileCheck(2,\'lectures_ua\');return false;"></p>
       </form>';
        ?>
      </div>

      </div>
      </div>

      <div id="lab_ua">  <!-- блок данных по лабам  -->
      <div class="container">

      <!-- вкладка лекции  -->
      <div class="row text-left labs-doc">
        <?php
           // загрузка новых файлов  
           // запись всех файлов с папки в массив 
          $featured_dir = 'docs_ru/labs_ua/doc/';
          $scan = scandir($featured_dir);

      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data"  id="form3">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                           echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="labs_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" download><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/labs_ua/doc/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb3" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(3,\'labs_ua\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      <div class="row text-left labs-pdf">
        <?php

          $featured_dir = 'docs_ru/labs_ua/pdf/';
          $scan = scandir($featured_dir);
      echo '<form action="index.php" name="upload" method="post" enctype="multipart/form-data" id="form4">
                <ol>';
                 $a = -2;
                 for ($i=0; $i<count($scan); $i++) {
                  if ($scan[$i] != '.' && $scan[$i] != '..') {
                       echo '<li id = "' .$a. '"><a href= "'. $featured_dir . $scan[$i] . '"><p id="labs_1">'. $scan[$i] . '</p></a>
                             <a href="'. $featured_dir . $scan[$i] . '" target="_blank"><img src="img/save.png" alt="Скачать" class="save-png"></a>
                             <a href="#" onclick="deleteFile(&quot;docs_ru/labs_ua/pdf/'.$scan[$i].'&quot;); return false;"><img src="img/update.png" alt="Удалить" class="update-png"></a></li>';
                    } 
                    $a++;
                } echo '</ol>';
                  echo '<input type="file" accept=".doc, .docx, .pdf" name="im" id="flb4" class="input_change plus_block">
              <p><input type="submit" name="upload" value="Загрузить" onclick="runFileCheck(4,\'labs_ua\');return false;" class="plus_block" id="input_load"></p>
       </form>';
        ?>
      </div>

      </div>
      </div>


    </section>

    <section id="content_4_ua" class="ua">
      <div class="container format-files">
      <div class="row text-right " id="format-files-lectures_ua">
         <p>Разширення файлів:</p>
         <a href="#"><img src="img/doc.png" alt="doc" id="lectures_doc_files_ua"></a>
         <a href="#"><img src="img/pdf.png" alt="pdf" id="lectures_pdf_files_ua"></a>
      </div>
       <div class="row text-right " id="format-files-labs_ua">
         <p>Разширення файлів:</p>
         <a href="#"><img src="img/doc.png" alt="doc" id="labs_doc_files_ua"></a>
         <a href="#"><img src="img/pdf.png" alt="pdf" id="labs_pdf_files_ua"></a>
      </div>
       </div>
    </section>
         

  <section id="content_5">
    <div class="container">
     <div class="row logo_1 text-right">
        <img src="img/xai.png" alt="XAI">
        </div>
     </div>
    </section>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --><!-- Подклчена библиотека jquery -->
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script> <!-- Подключен стандартный файл bootstrap -->
    <script src="js/jquery.nicescroll.min.js"></script>
    <script src="js/wow.min.js"></script>   <!-- Подклчена библиотека для анимации -->
    <!-- Инициируем за рание файл wow.min.js -->
    <script>
       new WOW().init(); 
    </script>
   <script type="text/javascript">
   	<?php 
   	if(isset($_GET['li'])){
   		print("$('#content_1').fadeOut(\"fast\");
			        $('#content_2').css(\"display\", \"inline\").css(\"opacity\", \"2\");
			        $('.update-png').css(\"display\", \"inline\").css(\"opacity\", \"2\");
              $('.plus_block').css(\"display\", \"block\").css(\"opacity\", \"2\");
			        $('#password').val('');");
   	}
   	 ?>
   </script>
<!-- Инициализация документ jquery.nicescroll-->
    <script>
       $(document).ready(
          function() {
              $("html").niceScroll({cursorcolor:"#000"});  
          }
      );
    </script>


    <script>
      $("#Ru").on("click",function()
        {
          $('.ua').fadeOut("fast");
          $('.eng').fadeOut("fast");
          $('.ru').css("display", "inline-block");
        });
        $("#Ua").on("click",function()
        {
          $('.ru').fadeOut("fast");
          $('.eng').fadeOut("fast");
          $('.ua').css("display", "inline-block");
        });
        $("#Eng").on("click",function()
        {
          $('.ru').fadeOut("fast");
          $('.ua').fadeOut("fast");
          $('.eng').css("display", "inline-block");
        });
    </script>

    <script>
    function runFileCheck(fid, fld){
    	console.log('passed');
    	var fileName = $("#flb"+fid).val().split('/').pop().split('\\').pop();
    	console.log(fileName.split('.')[1]);
    	console.log('passed');
		if(fileName.split('.')[1] != "pdf" && fileName.split('.')[1] != "doc" && fileName.split('.')[1] != "docx" && fileName.split('.')[1] != "xls" && fileName.split('.')[1] != "xlsx"  && fileName.split('.')[1] != "dwg")
		{
			alert('Ошибка: Неверный тип файла. (только PDF/DOC/DOCX/XLS/XLSX)');
			return false;
		}
		else {
			console.log('passed');
			var file_data = $('#flb'+fid).prop('files')[0];
			var form_data = new FormData();
			form_data.append('file', file_data);
			form_data.append('folder', fld);
			console.log('passed');
			$.ajax({
				type: 'POST',
				url: '/uploadfile.php',
				data: form_data,
				processData: false,
            	contentType: false,
				success: function(d){
					console.log(d);
					if(d == "wrongtype")
					{
						alert('Ошибка загрузки: Неверный тип файла. (только PDF/DOC/DOCX/XLS/XLSX)');
						return;
					}
					else {
						window.location.href = "?li";
					}
				}
			});
			console.log('passed');
			return false;
		}
    }
      function val(){
	      var text = $('#password').val();
	      $.post(
	      	'auth.php',
	      	{pass: text},
	      	function(d){
	      		if(d != "ok"){
	      			alert('Неправильный пароль.');
	      		}
	      		else {
	      			$('#content_1').fadeOut("fast");
			        $('#content_2').css("display", "inline").css("opacity", "2");
              $('#content_5').css("display", "inline-block");
			        $('.update-png').css("display", "inline").css("opacity", "2");
              $('.plus_block').css("display", "block").css("opacity", "2");
			        $('#password').val('');
	      		}
	      	}
	      );
       }
        
       $('#password').on("keyup",function()
        {  
          if(event.keyCode == 13){
            return val();
            } 
        });
    </script>

    <script>
         $(".student").on("click",function()
        {
          $('#content_1').fadeOut("fast");
          $('#content_4').fadeOut("fast");
          $('#content_4_ua').fadeOut("fast");
          $('#content_3').fadeOut("fast");
          $('#content_3_ua').fadeOut("fast");
          $('#content_2').css("display", "inline");
          $('.plus_block').fadeOut("fast");
          $('#content_5').css("display", "inline-block");
        });
         $(".name").on("click",function()
        {
          $('#content_2').fadeOut("fast");
          $('#content_3').fadeOut("fast");
          $('#content_3_ua').fadeOut("fast");
          $('#click_back').fadeOut("fast");
          $('#content_1').css("display", "inline").css("opacity", "2");
          $('#content_5').css("display", "inline-block").css("opacity", "2");
          $('.update-png').fadeOut("fast");
          $('#content_4').fadeOut("fast");
          $('#content_4_ua').fadeOut("fast");
          // $('.lectures').fadeOut("fast");
          // $('.labs').fadeOut("fast");
          // $('.typical_tasks').fadeOut("fast");
          // $('.assessment').fadeOut("fast");
        });/// shamanit
         $(".lectures").on("click",function()
        {
          $('#content_2').fadeOut("fast");
          $('#content_1').fadeOut("fast");
          $('#content_5').fadeOut("fast");
          $('#content_3').css("display", "inline").css("opacity", "2");
          $('#click_back').css("display", "inline").css("opacity", "1");
          $('#content_4').css("display", "inline").css("opacity", "2");

          $('#lec').css("display", "inline").css("opacity", "2");
          $('#lec_ua').css("display", "inline").css("opacity", "2");
          $('#format-files-lectures').css("display", "inline").css("opacity", "2");
          $('#format-files-lectures_ua').css("display", "inline").css("opacity", "2");

           $('#lab').fadeOut("fast");
           $('#lab_ua').fadeOut("fast");
           $('#format-files-labs_ua').fadeOut("fast");
           $('#format-files-labs').fadeOut("fast");

          $('#asses').fadeOut("fast");
          $('#typ').fadeOut("fast");
          $('#format-files-typical_tasks').fadeOut("fast");
          $('#format-files-assessment').fadeOut("fast");
        });
         $(".labs").on("click",function()
        {
          $('#content_2').fadeOut("fast");
          $('#content_1').fadeOut("fast");
          $('#content_5').fadeOut("fast");
          $('#content_3').css("display", "inline").css("opacity", "2");
          $('#click_back').css("display", "inline").css("opacity", "1");
          $('#content_4').css("display", "inline").css("opacity", "2");

          $('#lab').css("display", "inline").css("opacity", "2");
          $('#lab_ua').css("display", "inline").css("opacity", "2");
          $('#format-files-labs').css("display", "inline").css("opacity", "2");
          $('#format-files-labs_ua').css("display", "inline").css("opacity", "2");

          $('#lec').fadeOut("fast");
          $('#lec_ua').fadeOut("fast");
          $('#format-files-lectures_ua').fadeOut("fast");
          $('#format-files-lectures').fadeOut("fast");
         

          $('#asses').fadeOut("fast");
          $('#typ').fadeOut("fast");
          $('#format-files-typical_tasks').fadeOut("fast");
          $('#format-files-assessment').fadeOut("fast");

        });
         $(".typical_tasks").on("click",function()
        {
          $('#content_2').fadeOut("fast");
          $('#content_1').fadeOut("fast");
          $('#content_5').fadeOut("fast");
          $('#content_3').css("display", "inline").css("opacity", "2");
          $('#click_back').css("display", "inline").css("opacity", "1");
          $('#content_4').css("display", "inline").css("opacity", "2");

          $('#typ').css("display", "inline").css("opacity", "2");
          $('#format-files-typical_tasks').css("display", "inline").css("opacity", "2");

            $('#lec').fadeOut("fast");
            $('#lab').fadeOut("fast");
            $('#asses').fadeOut("fast");
        });
         $(".assessment").on("click",function()
        {
          $('#content_2').fadeOut("fast");
          $('#content_1').fadeOut("fast");
          $('#content_5').fadeOut("fast");
          $('#content_3').css("display", "inline").css("opacity", "2");
          $('#click_back').css("display", "inline").css("opacity", "1");
          $('#content_4').css("display", "inline").css("opacity", "2");

          $('#asses').css("display", "inline").css("opacity", "2");
          $('#format-files-assessment').css("display", "inline").css("opacity", "2");

            $('#lec').fadeOut("fast");
            $('#lab').fadeOut("fast");
            $('#typ').fadeOut("fast");
        });
         $("#click_back").on("click",function()
        {
          $('#content_1').fadeOut("fast");
          $('#content_3').fadeOut("fast");
          $('#content_4').fadeOut("fast");
          $('#click_back').fadeOut("fast");
          $('#content_2').css("display", "inline").css("opacity", "2");
          $('#content_5').css("display", "inline").css("opacity", "2");

          $('#asses').fadeOut("fast");
          $('#typ').fadeOut("fast");
          $('#lab').fadeOut("fast");
          $('#lab_ua').fadeOut("fast");
          $('#lec').fadeOut("fast");
          $('#lec_ua').fadeOut("fast");
          $('#format-files-lectures').fadeOut("fast");
          $('#format-files-labs').fadeOut("fast");
          $('#format-files-lectures_ua').fadeOut("fast");
          $('#format-files-labs_ua').fadeOut("fast");
          $('#format-files-typical_tasks').fadeOut("fast");
          $('#format-files-assessment').fadeOut("fast");
        });
    </script>

    <script>
      $("#lectures_doc_files").on("click",function()
        {
          $('.lectures-pdf').fadeOut("fast");
          $('.lectures-doc').css("display", "inline").css("opacity", "2");
        });
      $("#lectures_doc_files_ua").on("click",function()
        {
          $('.lectures-pdf').fadeOut("fast");
          $('.lectures-doc').css("display", "inline").css("opacity", "2");
        });
      $("#lectures_pdf_files").on("click",function()
        {
          $('.lectures-doc').fadeOut("fast");
          $('.lectures-pdf').css("display", "inline").css("opacity", "2");
        });
      $("#lectures_pdf_files_ua").on("click",function()
        {
          $('.lectures-doc').fadeOut("fast");
          $('.lectures-pdf').css("display", "inline").css("opacity", "2");
        });
       $("#labs_doc_files").on("click",function()
        {
          $('.labs-pdf').fadeOut("fast");
          $('.labs-doc').css("display", "inline").css("opacity", "2");
        });
       $("#labs_doc_files_ua").on("click",function()
        {
          $('.labs-pdf').fadeOut("fast");
          $('.labs-doc').css("display", "inline").css("opacity", "2");
        });
       $("#labs_pdf_files").on("click",function()
        {
          $('.labs-doc').fadeOut("fast");
          $('.labs-pdf').css("display", "inline").css("opacity", "2");
        });
       $("#labs_pdf_files_ua").on("click",function()
        {
          $('.labs-doc').fadeOut("fast");
          $('.labs-pdf').css("display", "inline").css("opacity", "2");
        });
       $("#typical_tasks_doc_files").on("click",function()
        {
          $('.typical_tasks-pdf').fadeOut("fast")
          $('.typical_tasks-doc').css("display", "inline").css("opacity", "2");
        });
       $("#typical_tasks_pdf_files").on("click",function()
        {
          $('.typical_tasks-doc').fadeOut("fast");
          $('.typical_tasks-pdf').css("display", "inline").css("opacity", "2");
        });
        $("#assessment_xls_files").on("click",function()
        {
          $('.assessment-pdf').fadeOut("fast");
          $('.assessment-xls').css("display", "inline").css("opacity", "2");
        });
       $("#assessment_pdf_files").on("click",function()
        {
          $('.assessment-xls').fadeOut("fast");
          $('.assessment-pdf').css("display", "inline").css("opacity", "2");
        });
    </script>
      


    <script>
        // $("#lecture_1").on("click",function()
      //  {
      //    return !window.open('https://news.google.com/?tab=mn&hl=ru&gl=UA&ceid=UA:ru');
     //   });
    </script>
    <script type="text/javascript">
    function deleteFile(fs){
    	$.post('/deletefile.php', {f: fs}, function(d){
    		if(d == "ok"){ window.location.href = "?li"; return; }
    		alert('Ошибка.');
    	});
    }
    </script>
     <!-- подключаем файл -  animate.css -->
<!--     <link rel="stylesheet" href="css/animate.css"> -->

  </body> 
</html>