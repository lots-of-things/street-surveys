		complic = []
		function setup_exp2() {
  			quests = ['Take a moment to look at this street scene. How safe in general does this street feel to you?', 
  						'Imagine that you are walking home alone at night on this street. How comfortable would you feel pulling out a brand new smartphone and talking or texting on it while walking?',
  						'Imagine that a man of average build is walking home alone at night on this street. How easy would it be for someone to rob or assault this man?',
  						'Imagine that a woman of average build is walking home alone at night on this street. How easy would it be for someone to rob or assault this woman?',
  						'If you are paying attention, leave the response scale below blank and just click "Next" to continue.',
  						'How familiar does this street feel to you?'];
  			leftans = ['Very dangerous', 'Very uncomfortable','Very difficult','Very difficult','fifth','Very unfamiliar'];
  			rightans = ['Very safe', 'Very comfortable','Very easy','Very easy','fifth','Very familiar'];
  		}
  		function record2(){
  			data.push(exp2[ind]+','+frq[exp2[ind]]+','+$('input:checked').val()+','+(Date.now()-tim))
  			if(!((""+frq[exp2[ind]]) in complic)){
  				complic[""+frq[exp2[ind]]] = []
  			}
  			complic[""+frq[exp2[ind]]][qu+1]=$('input:checked').val()
  			if(qu==4){
  				attent = $('input:checked').val()
  			}
  			$('input').attr('checked',false);
  		}
  		function demogr_it(){
  			$('#games').css("display","none");
  			$('#demographics').css("display","block");
  			
  		}
  		function finish_it(){
  			$.post('savedata.php', { data: data }, function(result) {
				return;
			});
			dat = data.split(',');
			incorr = totnum-corr;
			data2 = dat[0]+','+corr+','+incorr+','+(resp_c/corr)+','+(resp_w/incorr)
			data2=data2+','+complic["A"][1]+','+complic["A"][2]+','+complic["A"][3]+','+complic["A"][4]+','+complic["A"][0]
			data2=data2+','+complic["B"][1]+','+complic["B"][2]+','+complic["B"][3]+','+complic["B"][4]+','+complic["B"][0]
			data2=data2+','+complic["G"][1]+','+complic["G"][2]+','+complic["G"][3]+','+complic["G"][4]+','+complic["G"][0]
			data2=data2+','+complic["H"][1]+','+complic["H"][2]+','+complic["H"][3]+','+complic["H"][4]+','+complic["H"][0]
			
			data2=data2+','+attent
			$.post('savedata2.php', { data: data2 }, function(result) {
				return;
			});
			$('#demographics').css("display","none");
  			$('#subdisplay').text(subid);
  			$('#finale').css("display","block");
  			OkayToLeave();
  		}
  		function display_quest(indd,q){
  			tim = Date.now();
  			im = exp2[indd];
  			if(q==-1){
  				q = 5;
  			}
  			todisp = newimages[im].src
			
			if(im==b[1]||im==b[7]){
				todisp = newimages_con[im].src
			}
  			$('#image').css("display","block");
  			$('#image').attr("src", todisp);
  			$('#thequestion').text(quests[q]);
  			$('#leftradio').text(leftans[q]);
  			$('#rightradio').text(rightans[q]);
  		}
  		$('#but2').on('click', function(event) {
			setup_exp2()
			ind = 0;
			qu=0
			$('#instructions2').css("display","none");
  			$('#radiodiv').css("display","inline");
  			$('#inputbut').css("display","inline");
  			$('#but2').css("display","none");
  			display_quest(ind,qu);
  		});
  		$('#inputbut').on('click', function(event) {
			record2();
			if(qu!=-1){
				qu++;
		
				if((qu==4&&ind!=0)||qu==5){
					qu=0;
					ind++;
				}
				if(ind==4){
					ind=0;
					qu=-1;
				}
				display_quest(ind,qu);
			} else{
				ind++;
				if(ind==4){
					demogr_it();
				}else{
					display_quest(ind,qu);
				}
			}		
  			
  		});
  		$('#submit').on('click', function(event) {
			var o = {};
			var a = $('form').serializeArray();
			$.each(a, function() {
				if (o[this.name] !== undefined) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			data = data+','+o.gender+','+o.age+','+o.race+','+o.income+','+o.housesize+','+o.edu+','+o.ideology
			finish_it();
			return false;
		});
