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
			for (var i=0; i<10; i++){
				newimages[i]=new Image()
				newimages[i].src='photos/'+(i+1)+'.png'
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
			
			for (var b=[],i=0;i<10;++i) b[i]=i;
			b = shuffle(b)
			
			for (brd=[],i=0;i<50;++i) brd[i]=Math.round(Math.random());
			
			for (frq=[],i=0;i<10;++i) frq[i]=0;
			frq[b[0]]=20;
			frq[b[1]]=5;
			frq[b[2]]=5;
			frq[b[3]]=5;
			frq[b[4]]=5;
			frq[b[5]]=5;
			frq[b[6]]=5;
			
			exp2 = [b[0], b[1], b[7]];
			exp2 = shuffle(exp2);
			
			bline = [0, 6, 1, 0, 5, 2, 0, 1, 0, 3, 0, 6, 4, 0, 2, 1, 0, 1, 6, 0, 3, 5, 0, 4, 6, 0, 2, 0, 3, 0, 5, 4, 0, 1, 0, 5, 0, 6, 2, 0, 3, 0, 2, 0, 5, 4, 0, 3, 0, 4];
			shift = cur = Math.floor(Math.random() * 49) ;
			for (exp=[],i=0;i<50;++i) {
				exp[i]=b[bline[(i+shift) % 50]]
			}
		}
  		function display_im(ind) {
  			var im = exp[ind]
  			var br = brd[ind]
    		$('#image').css("display","block");
  			$('#image').attr("src", newimages[im].src);
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
			data = [subid];
			$('#instructions').css("display","none");
  			$('#reminder').css("display","inline");
  			$('#but').css("display","none");
  			$('#bird').css("display","inline");
  			$('#bag').css("display","inline");
  			display_im(ind);
  		});
  		$('#bird').on('click', function(event) {
  			record(ind,1)
  			if(ind==49){
  				next_page()
  			}else{
  				ind++
  				display_im(ind)
  			}
  		});
  		$('#bag').on('click', function(event) {
  			record(ind,0)
  			if(ind==49){
  				next_page()
  			}else{
  				ind++
  				display_im(ind)
  			}
  		});