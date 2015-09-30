<?php
	$ip = $_SERVER['REMOTE_ADDR'];
	
   if( strpos(file_get_contents("./ipcheck.txt"),$ip) !== false) {
       header("Location: block.html"); /* Redirect browser */
		exit();
    }
	
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Bootstrap contact form with PHP example by BootstrapBay.com.">
    <meta name="author" content="BootstrapBay.com">
    <title>Survey</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  </head>
  <body>
  	<div class="container">
  		<div class="row">
  			<div id="games" class="col-md-8 col-md-offset-2">
  				<h1 class="page-header text-center">Street Scene Identification</h1>
				<div style="position:relative">
				<img class="img-responsive" id="image" style="display:none; height=100%"></img>
				<img id="inset" style="display:none"></img>
				</div>
				<div class='text-center'>
					<p id='instructions' class='text-center'>In round 1, you will be shown a series of different scenes at random. In each scene there will either be a pigeon or white plastic bag somewhere in the photo. Your job is to correctly identify either the pigeon or the plastic bag for each one. Once you have found it, use your mouse to click on the correct button&mdash;either pigeon or plastic bag&mdash;to move on to the next scene.
 						<br/><br/> The goal is to be 100% accurate for all the scenes. There is no time limit, but once you make your selection you can’t go back.</p>
					<p id='instructions2' class='text-center' style="display:none">In the next round, you will be asked to judge different street scenes. You will look at a street scene and then you will be asked to answer some questions and make some ratings about each scene.
						<br/><br/>There is no time limit, but once you answer the question you can’t change it or go back.</p>
					<p id='reminder' class='text-center' style="display:none;font-weight:bold"><br>Which object appears in this scene?</p>
				</div>
				<div class="text-center">
					<button id="but" type="button" class="btn btn-primary center-block">Let's Go!</button>
					<button id="but2" type="button" class="btn btn-primary center-block" style="display:none">Let's Go!</button>
					<button id="bird" type="button" class="btn btn-default center-block" style="display:none;margin-top:10px;">Pigeon</button>
					<button id="bag" type="button" class="btn btn-default center-block" style="display:none;margin-top:10px;">Plastic Bag</button>
					<div id="radiodiv" class="form-group" style="display:none">
    					<br><br>
    					<label id="thequestion"for="ideology"></label>
    					<table class='tblborder'><tr>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='-5'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='-4'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='-3'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='-2'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='-1'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='0'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='1'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='2'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='3'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='4'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ans' value='5'></td></tr><tr>
						<td class='tdnobord' width='75'>-5</td>
						<td class='tdnobord' width='75'>-4</td>
						<td class='tdnobord' width='75'>-3</td>
						<td class='tdnobord' width='75'>-2</td>
						<td class='tdnobord' width='75'>-1</td>
						<td class='tdnobord' width='75'>0</td>
						<td class='tdnobord' width='75'>1</td>
						<td class='tdnobord' width='75'>2</td>
						<td class='tdnobord' width='75'>3</td>
						<td class='tdnobord' width='75'>4</td>
						<td class='tdnobord' width='75'>5</td></tr><tr>
						<td id='leftradio' class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td id='middleradio' class='tdnobord' width='75'>Neutral</td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td id='rightradio' class='tdnobord' width='75'></td></tr>
						</table>
  					</div>
  					<button id="inputbut" type="button" class="btn btn-primary center-block" style="display:none">Next</button>
					
				</div>
			</div>
			<div id="demographics" style="display:none" class="col-md-8 col-md-offset-2">
  				<h1 class="page-header text-center">Demographics Questionnaire</h1>
				<p>You are nearly finished.  Please answer the remaining demographics questions below.</p>
				<form  >
					<div class="form-group">
    					<label for="gender">Gender</label><br/>
    					<label class="radio-inline"><input type="radio" name="gender" value="m" required>M</label>
    					<label class="radio-inline"><input type="radio" name="gender" value="f">F</label>
    				</div>
					<div class="form-group">
    					<label for="age">Age</label>
    					<input type="text" class="form-control" name="age" id="age" required>
  					</div>
					<div class="form-group">
    					<label for="q3">Race/Ethnicity</label>
    					<input type="text" class="form-control" name="race" id="race" required>
  					</div>
					
  					
					
						 <div class="form-group">
  							<label for="sel1">What is your total household income, including all earners in your household?</label>
  							<select class="form-control" id="income" name="income">
    							<option value="" required>--Select Here--</option>
								<option value="0"> Less than $10,000</option>
								<option value="1"> $10,000-$19,999</option>
 	 							<option value="2"> $20,000-$29,999</option>
								<option value="3"> $30,000-$39,999</option>
								<option value="4"> $40,000-$49,999</option>
								<option value="5"> $50,000-$59,999</option>
								<option value="6"> $60,000-$69,999</option>
  								<option value="7"> $70,000-$79,999</option>
								<option value="8"> $80,000-$89,999</option>
								<option value="9"> $90,000-$99,999</option>
								<option value="10"> $100,000-$149,000</option>
								<option value="11"> More than $150,000</option>
							</select>
						</div>
					<div class="form-group">
    					<label for="housesize">Including you, how many people live in your household?</label>
    					<input type="text" class="form-control" id="housesize" name="housesize" required>
  					</div>
  						<div class="form-group">
  							<label for="sel1">What is the highest level of education you have completed?</label>
  							<select class="form-control" id="edu" name="edu">
    							<option value="" required>--Select Here--</option>
								<option value="0"> Some high school</option>
								<option value="1"> Graduated high school</option>
 	 							<option value="2"> Some college (no degree)</option>
								<option value="3"> Associate's degree or technical or vocational school</option>
								<option value="4"> Bachelor's degree</option>
								<option value="5"> Some graduate or professional school</option>
								<option value="6"> Earned graduate or professional degree</option>
							</select>
						</div>
					<div class="form-group">
    					<label for="ideology">How liberal or conservative are you?</label>
    					<table class='tblborder'><tr>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='1' required></td>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='2'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='3'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='4'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='5'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='6'></td>
						<td class='tdnobord' width='75'><input type='radio' name='ideology' value='7'></td></tr><tr>
						<td class='tdnobord' width='75'>1</td>
						<td class='tdnobord' width='75'>2</td>
						<td class='tdnobord' width='75'>3</td>
						<td class='tdnobord' width='75'>4</td>
						<td class='tdnobord' width='75'>5</td>
						<td class='tdnobord' width='75'>6</td>
						<td class='tdnobord' width='75'>7</td></tr><tr>
						<td class='tdnobord' width='75'>Very liberal</td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'></td>
						<td class='tdnobord' width='75'>Very conservative</td></tr>
						</table>
  					</div>
  					
					
					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-8">
							<button id="submit" class="btn btn-primary">Submit</button>
						</div>
					</div>
					
				</form> 
			</div>
			<div id="finale" style="display:none" class="col-md-6 col-md-offset-3">
  				<h1 class="page-header text-center">Survey Finished!</h1>
				<p>Thank you for your participation.  You're subject number is <strong id="subdisplay">val</strong>.  If you have further questions feel free to contact our office.</p>
				
			</div>
		</div>
	</div>   
	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  	<script src="game1.js"></script>
  	<script src="game2.js"></script>
</body>
</html>