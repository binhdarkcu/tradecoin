<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<link rel="shortcut icon" href="images/favicon.ico" />
<title>TRADE COIN CLUB</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=640">

<link rel="stylesheet" href="css/all.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">

<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/class.SiteMain.js"></script>
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
	<div id="container">
        <div class="wrapper">
        	<?php
				$module = isset($_REQUEST['module']) ? $_REQUEST['module']: "home";
				include("modules/$module.php");
			?>
        </div>
    </div>
</body>
</html>
