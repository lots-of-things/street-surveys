		var okayToLeave = false;
		corr = 0;
		resp_c = 0;
		resp_w = 0;
		window.onbeforeunload = function () {
		   if (!okayToLeave) {
		   	return "The back button is disabled for this task.  If you navigate back you will not be able to complete the survey.  Are you sure?";
		   }
		}

		function OkayToLeave() {
			okayToLeave = true;
		} 
		
		function preloadimages(){
			newimages=[]
			newimages_con=[]
			for (var i=0; i<9; i++){
				newimages[i]=new Image()
				newimages[i].src='photos/street'+(i+1)+'.jpg'
				newimages_con[i]=new Image()
				newimages_con[i].src='photos/street'+(i+1)+'con.jpg'
				
			}
		}
		function shuffle(array) {
		  var tmp, current, top = array.length;
		  if(top) while(--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = array[current];
			array[current] = array[top];
			array[top] = tmp;
		  }
		  return array;
		}
		function build_experiment(){
			for (b=[],i=0;i<9;++i) b[i]=i;
			b = shuffle(b)
			totnum = 2;
			for (brd=[],i=0;i<totnum;++i) brd[i]=Math.round(Math.random());
			
			for (frq=[],i=0;i<9;++i) frq[i]=0;
			frq[b[0]]='A';
			frq[b[1]]='B';
			frq[b[2]]='C';
			frq[b[3]]='D';
			frq[b[4]]='E';
			frq[b[5]]='F';
			frq[b[6]]='G';
			frq[b[7]]='H';
			
			exp2 = [b[0], b[1], b[2], b[3]];
			exp2 = shuffle(exp2);
			dumq = ['How many people did you see in the scene?',
			                'How many cars did you see in the scene?',
			                'How many buildings or houses were there in the scene?',
			                'How many advertisements were there in the scene?',
			                'How many windows were there in the scene?',
			                'How many doors were there in the scene?']
			shuffle(dumq);
			bline = [0, 1];
			
			shift = cur = Math.floor(Math.random() * (totnum-1)) ;
			for (exp=[],i=0;i<totnum;++i) {
				exp[i]=b[bline[(i+shift) % totnum]]
			}
			
		}
  		function question() {
  			$('#image').css("display","none");
  			$('#for1').text(dumq.pop());
			$('#q1').val('');
			$('#for2').text(dumq.pop());
			$('#q2').val('');
			$('#for3').text(dumq.pop());
			$('#q3').val('');
			$('#dumq').css("display","block");
			
			
    		}
    		function display_im() {
  			var im = exp[ind]
  			var br = brd[ind]
    			$('#image').css("display","block");
			todisp = newimages[im].src
			
			
  			$('#image').attr("src", todisp);
			$('#image').css("height","400px");
  			$('#image').css("margin","0px auto");
  			

  			ind = ind+1;
  			window.setTimeout(question, 300000);
    		}
	    	function next_page() {
	    		$('#image').css("display","none");
	    		$('#inset').css("display","none");
	    		$('#reminder').css("display","none");
	    		$('#bird').css("display","none");
	  			$('#bag').css("display","none");
	  			$('#instructions2').css("display","inline");
	  			$('#but2').css("display","inline");
	  			
	    	}
	    	preloadimages()
	    	$('#dumbut').on('click', function(event) {
	    	        $('#dumq').css("display","none");
	    	        
	    	        if(ind==1){
			        display_im();
			}else{
			        next_page();
			}
  		});
		$('#but').on('click', function(event) {
			build_experiment();
			subid = Math.floor(100000000 + Math.random() * 900000000);
			ind = 0;
			data = [subid];
			$('#instructions').css("display","none");
  			$('#but').css("display","none");
  			display_im();
  		});
  		
