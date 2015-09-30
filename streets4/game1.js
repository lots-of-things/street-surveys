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
			totnum = 30;
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
			
			exp2 = [b[0], b[1], b[6], b[7]];
			exp2 = shuffle(exp2);
			
			
			bline = [0, 1, 5, 2, 3, 4, 5, 0, 3, 2, 4, 3, 1, 0, 2, 4, 5, 3, 2, 1, 5, 3, 4, 1, 5, 0, 4, 1, 0, 2];
			
			shift = cur = Math.floor(Math.random() * (totnum-1)) ;
			for (exp=[],i=0;i<totnum;++i) {
				exp[i]=b[bline[(i+shift) % totnum]]
			}
			
		}
  		function display_im(ind) {
  			var im = exp[ind]
  			var br = brd[ind]
    			$('#image').css("display","block");
			todisp = newimages[im].src
			
			
  			$('#image').attr("src", todisp);
			$('#image').css("height","300px");
  			$('#image').css("margin","0px auto");
  			if(br){
  				$('#inset').attr("src", "photos/bird.png");
  			} else{
  				$('#inset').attr("src", "photos/bag.png");
  			}
  			var tp = Math.floor(Math.random()*75);
  			var lf = 25+Math.floor(Math.random()*45);
  			$('#inset').css({'width': '5%', 'bottom': tp+'%', 'left': lf+'%', 'display': 'inline', 'position': 'absolute'});
  			tim = Date.now();
    		}
	    	function record(ind,sel) {
	    		corr = corr + (brd[ind]==sel)
	    		tm = (Date.now()-tim)
	    		if(brd[ind]==sel){
	    			resp_c = resp_c+tm
	    		}else{
	    			resp_w = resp_w+tm
	    		}
	    		data.push((exp[ind]+1)+','+frq[exp[ind]]+','+(+(brd[ind]==sel))+','+tm)
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
			ind = 0;
			cond = Math.floor(Math.random() * 3)
			data = [subid,cond];
			$('#instructions').css("display","none");
  			$('#reminder').css("display","inline");
  			$('#but').css("display","none");
  			$('#bird').css("display","inline");
  			$('#bag').css("display","inline");
  			display_im(ind);
  		});
  		$('#bird').on('click', function(event) {
  			record(ind,1)
  			if(ind==(totnum-1)){
  				next_page()
  			}else{
  				ind++
  				display_im(ind)
  			}
  		});
  		$('#bag').on('click', function(event) {
  			record(ind,0)
  			if(ind==(totnum-1)){
  				next_page()
  			}else{
  				ind++
  				display_im(ind)
  			}
  		});
