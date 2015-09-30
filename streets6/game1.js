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
			newimages_on=[]
			newimages_off=[]
			for (var i=0; i<9; i++){
				newimages[i]=new Image()
				newimages[i].src='photos/street'+(i+1)+'.jpg'
				newimages_on[i]=new Image()
				newimages_on[i].src='photos/street'+(i+1)+'on.jpg'
				newimages_off[i]=new Image()
				newimages_off[i].src='photos/street'+(i+1)+'off.jpg'
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
			
			exp2 = [b[0]];
			exp2 = shuffle(exp2);
			
			bline = [0];
			
			shift = cur = Math.floor(Math.random() * (totnum-1)) ;
			for (exp=[],i=0;i<totnum;++i) {
				exp[i]=b[bline[(i+shift) % totnum]]
			}
			
		}
  		
    		function blink_im() {
  			if(t<0){
  			        next_page()
  			}else{
          			var im = exp[ind]
          			$('#image').css("display","block");
			        todisp = newimages_off[im].src
			        if(c==1){
			                todisp = newimages_on[im].src
			        }
          			$('#image').attr("src", todisp);
			        $('#image').css("height","400px");
          			$('#image').css("margin","0px auto");
          			t = t-500;
                                c = 1-c;
          			window.setTimeout(blink_im, 500);
  			}
    		}
    		
    		function brink_im() {
  			if(t<0){
  			        next_page()
  			}else{
          			var im = exp[ind]
          			$('#image').css("display","block");
			        todisp = newimages_off[im].src
			        if(c==1){
			                todisp = newimages_on[im].src
			        }
          			$('#image').attr("src", todisp);
			        $('#image').css("height","400px");
          			$('#image').css("margin","0px auto");
          			dt = 250+Math.floor(500*Math.random())
  			        t = t-dt;
  			        c = 1-c;
          			window.setTimeout(brink_im, dt);
  			}
  			
  			
    		}
    		
    		function display_im() {
  			var im = exp[ind]
  			$('#image').css("display","block");
			todisp = newimages[im].src
			
  			$('#image').attr("src", todisp);
			$('#image').css("height","400px");
  			$('#image').css("margin","0px auto");
  			
  			window.setTimeout(next_page, 5000);
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
		$('#but').on('click', function(event) {
			build_experiment();
			subid = Math.floor(100000000 + Math.random() * 900000000);
			cond = Math.floor(Math.random() * 3);
			console.log(cond)
			ind = 0;
			data = [subid, cond];
			$('#instructions').css("display","none");
  			$('#but').css("display","none");
  			c=0;
  		        t=5000;
  		        if(cond==0){
  			        display_im();
  			}else if(cond==1){
  			        blink_im()
  			}else if(cond=2){
  			        brink_im();
  			}
  		});
  		
