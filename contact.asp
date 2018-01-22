<!DOCTYPE html>

<html>

<head>
	<meta charset="UTF-8">
		
	<title> Andrew Nolte </title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
	<link rel="stylesheet" href="stylesn.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>


<body>
	
	<ul id="graphs-drop" class="dropdown-content">
		<li><a href="robotics.asp">Robotics</a></li>
		<li><a href="physics.asp">Physics</a></li>
		<li><a href="geometry.asp">Geometry</a></li>
		<li><a href="algebra.asp">Algebra</a></li>
		<li><a href="calculus.asp">Calculus</a></li>
		<li><a href="statistics.asp">Statistics</a></li>
</ul>
<nav>
	<div class="nav-wrapper">
		<a href="main.html" class="brand-logo left"> &nbsp Andrew Nolte </a>
		<ul class="right">
			<li><a href="documents.asp">Documents</a></li>
			<li><a class="dropdown-button" href="#!" data-activates="graphs-drop">Graphs<i class="material-icons right"></i></a></li>
			<li><a href="contact.asp">Contact</a></li>

		</ul>
	</div>	
</nav>
        
        <div class="row">
			<div class="col s6 m12">
				<h3 class="graph-page-title">
					Contact
				</h3>
			</div>
		</div>
        <div class="container">
            <form action="action_page.php">
          
                <div class="row">
                    <div class="input-field col s6">
                      <input id="first_name" type="text" class="validate">
                      <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                      <input id="last_name" type="text" class="validate">
                      <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate">
                      <label for="email">Email</label>
                    </div>
                  </div>
              <label for="subject">Message</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
          
							<input type="submit" value="Submit">
							<br>
							<br>
								Form submission not yet functional. Please feel free to email me at <a href="mailto:anolte512@gmail.com">anolte512@gmail.com</a>
							 <br>
							 <br>
							</form>
					</div>
					<footer></footer>

	<script>
			$(document).ready(function(){
				$(".dropdown-button").dropdown({hover: true});
		
			});
	</script>

	
</body>




</html>