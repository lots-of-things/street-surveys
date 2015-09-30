<?php
	$ip = $_SERVER['REMOTE_ADDR'];

    if( strpos(file_get_contents("./ipcheck.txt"),$ip) !== false) {
        header("Location: block.html"); /* Redirect browser */
		exit();
    }
	$subID = rand(100000, 999999);
	while( strpos(file_get_contents("./ids.txt"),$subID) !== false) {
        $subID = rand(100000, 999999);
    }
    $file = 'ids.txt';
	file_put_contents($file, $subID . "\n", FILE_APPEND | LOCK_EX);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Bootstrap contact form with PHP example by BootstrapBay.com.">
    <meta name="author" content="BootstrapBay.com">
    <title>Consent Form</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  </head>
  <body>
  	<div class="container">
  		<div class="row">
  			<div class="col-md-6 col-md-offset-3">
  				<h5 class=" text-center">THE UNIVERSITY OF CHICAGO</h5>
  				<h5 class=" text-center">Booth School of Business</h5>
  				<h5 class=" text-center">Study conducted by Anuj K. Shah</h5>
				<h1 class="page-header text-center">Consent document</h1>
				<p>We are asking you to participate in a research study. Please read the information below and feel free to ask any questions that you may have.</p>
<h4>A. Project Description</h4>
<ol><li>In this study, you will take a brief personality test and make some judgments.</li>
<li>The estimated time to complete this study is approximately 10 minutes.</li>
<li>The research is being conducted with the goal of publication in an academic journal and possibly presentation at academic conferences.</li>
</ol>

<h4>B. Risks and Benefits</h4>
<p>Your participation in this study does not involve any physical risk or emotional risk to you beyond the risks of daily life. You have the right to withdraw your consent or discontinue participation at any time for any reason. Your decision to withdraw will not involve any penalty or loss of benefits to which you are entitled.</p>
<h4>C. Confidentiality</h4>

<p>Your name or other identifiers will not be attached to your answers so that your confidentiality can be maintained. Your privacy will be ensured in that all data resulting from this study will be analyzed, written, and published in aggregate form.</p>
				
<h4>D. Contact Information</h4>

<ol><li> If you have any questions or concerns about the research you may contact anuj.shah@chicagobooth.edu</li>

<li>If you have any questions about your rights as a participant in this research, you can contact the following office at the University of Chicago:
<pre>Social & Behavioral Sciences Institutional Review Board
University of Chicago
5835 South Kimbark - Judd 333
Chicago, Illinois 60637
Phone: (773) 834-7835, Fax: (773) 834-8700
Email: sbs-irb@uchicago.edu		</pre>
</li>
</ol>
				
<h4>E. Subjects rights</h4>
<p>Your participation is voluntary and refusal to participate does not involve any penalty. You may discontinue participation at any time without penalty. A copy of this consent document is available to you for your records if you so choose.</p>

<h4>Do you wish to participate in this study?</h4>
				<form class="form-horizontal" role="form" method="post" action="survey.php">
					<!--
					<div class="form-group">
						<label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
						<div class="col-sm-10">
							<input type="text" class="form-control" id="human" name="human" placeholder="Prove You're Human" required>
							
						</div>
					</div>
					-->
					<?php 
						echo "<input type='hidden' id='subID' name='subID' value=$subID >";
						
					 ?>
					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-8">
							<input id="submit" name="submit" type="submit" value="I consent" class="btn btn-primary">
						</div>
					</div>
				</form> 
			</div>
		</div>
	</div>   
	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  </body>
</html>