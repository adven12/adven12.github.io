<?php

$ext = explode(".", $_FILES['file']['name']);
$ext = $ext[count($ext)-1];
$exts = array('docx', 'doc', 'pdf', 'xls', 'xlsx', 'dwg');
if(!in_array($ext, $exts))
{
	die( "wrongtype" );
}
if($ext == "pdf")
{
	$fldb = "pdf";
}
if($ext == "doc")
{
	$fldb = "doc";
}
if($ext == "xls")
{
	$fldb = "xls";
}
if($ext == "dwg")
{
	$fldb = "dwg";
}

move_uploaded_file($_FILES['file']['tmp_name'], 'docs_ru/'. $_POST['folder'] . "/" . $fldb . "/" . $_FILES['file']['name']);
die( 'ok' );

?>
