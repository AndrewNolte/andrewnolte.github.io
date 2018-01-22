<!DOCTYPE html>

<html>

<head>
	<meta charset="UTF-8">
		
	<title> Andrew Nolte </title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
	<link rel="stylesheet" href="stylesn.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>


<body>
	
	<ul id="graphs-drop" class="dropdown-content">
		<li><a href="robotics.html">Robotics</a></li>
		<li><a href="physics.html">Physics</a></li>
		<li><a href="geometry.html">Geometry</a></li>
		<li><a href="algebra.html">Algebra</a></li>
		<li><a href="calculus.html">Calculus</a></li>
		<li><a href="statistics.html">Statistics</a></li>
	</ul>
	<nav>
		<div class="nav-wrapper">
			<a href="index.html" class="brand-logo left"> &nbsp Andrew Nolte </a>
			<ul class="right">
				<li><a href="documents.asp">Documents</a></li>
				<li><a class="dropdown-button" href="#!" data-activates="graphs-drop">Graphs<i class="material-icons right"></i></a></li>
				<li><a href="contact.asp">Contact</a></li>

			</ul>
		</div>	
	</nav>
<div class="container">

</div>


	<script>
			$(document).ready(function(){
				$(".dropdown-button").dropdown({hover: true});
		
			});
	</script>

	
</body>




</html>