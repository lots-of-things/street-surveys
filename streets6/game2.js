		complic = []
		function setup_exp2() {
  			quests = ['How strong of a police presence do you think there is around this street?', 
  						'How often do you think violent crimes happen around this street?',
  						'If someone called 911 to respond to a crime, how likely is it that the police would arrive in less than 5 minutes?',
  						'If you were walking down this block alone at night, how comfortable would you feel taking out your cell phone?',
  						'If you are paying attention, leave the response scale below blank and just click "Next" to continue.',
  						'How safe do you think this street is?'];
  			leftans = ['Not strong at all', 'Not often at all','Not likely at all','Not comfortable at all','fifth','Not safe at all'];
  			rightans = ['Very strong', 'Very often','Very likely','Very comfortable','fifth','Very safe'];
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
			data2 = dat[0]+','+dat[1]+','
			data2=data2+','+complic["A"][1]+','+complic["A"][2]+','+complic["A"][3]+','+complic["A"][4]+','+complic["A"][0]
			
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
			
			if(cond>0){
				todisp = newimages_on[im].src
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
				if(ind==1){
					ind=0;
					qu=-1;
				}
				display_quest(ind,qu);
			} else{
				ind++;
				if(ind==1){
					demogr_it();
				}else{
					display_quest(ind,qu);
				}
			}		
  		});
  		$('#submit').on('click', function(event) {
			var o = {};
			console.log('eyhey');
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
