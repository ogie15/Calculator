var operatior = "";
var num_check = false;
var operatior_state = false;
var gen_op  = 0;
var cv = 0;
var thread_num = 0;
var num_rep = "";
var cal_value = 0;
var ivnum = 0;
var init_squ = 1;
var init_sr = 1;
var square_check = 0;
var square_r_check = 0;

function timer(){

	thread_num = setInterval(function(){
		$(".fa-smile").fadeToggle(2000);
		// $(".fa-smile").show(2000);
	}, 2000);
}



function num(number) {
	
	num_check = true;
	var disp_unit = document.getElementById('disp');
	// disp_unit.innerHTML= "";
	var top_disp = document.getElementById('top_disp');
	var init_number = disp_unit.innerHTML.toString();
	if (cal_value == 0){
		if(init_number == "0"){
			init_number = "";
		}
		if(number == "."){
			if(init_number.indexOf(".") == -1){
				if(init_number.length == 0 || init_number=="" ){
					init_number = "0";
				}
				if(top_disp.innerHTML.length !=0 && operatior_state==true ){
					init_number = "0";
					operatior_state = false;
				}
				number = init_number + number;
				if(number.length < 14){
					disp_unit.innerHTML = number;
				}else{
					console.log("Maximum number reached");
					navigator.vibrate(1000);
				}
			}
		}else{
			if(top_disp.innerHTML.length !=0 && operatior_state==true ){
				init_number = "";
				operatior_state = false;
			}
			number = init_number + number;
			if(number.length < 14){
				disp_unit.innerHTML = number;
			}else{
				console.log("Maximum number reached");
				navigator.vibrate(1000);
			}
		}
	}else{
		console.log("entered");
		init_number="";
		disp_unit.innerHTML=init_number+number;
		if(number == "."){
			if(init_number.indexOf(".") == -1){
				if(init_number.length == 0 || init_number=="" ){
					init_number = "0";
				}
				if(top_disp.innerHTML.length !=0 && operatior_state==true ){
					init_number = "0";
					operatior_state = false;
				}
				number = init_number + number;
				if(number.length < 14){
					disp_unit.innerHTML = number;
				}else{
					console.log("Maximum number reached");
					navigator.vibrate(1000);
				}
			}
		}else{
			if(top_disp.innerHTML.length !=0 && operatior_state==true ){
				init_number = "";
				operatior_state = false;
			}
			number = init_number + number;
			if(number.length < 14){
				disp_unit.innerHTML = number;
			}else{
				console.log("Maximum number reached");
				navigator.vibrate(1000);
			}
		}
		cal_value=0;
		// if(number == "."){
		// 	disp_unit.innerHTML= "0"+ number;
		// }
	}
	
	
}



function multiply(op_type){
	cv = 0;
	var top_display = document.getElementById('top_disp');
	var display = document.getElementById('disp');
	var disp_val = display.innerHTML;
	var top_val = top_display.innerHTML;
	var last_opertor = top_val.charAt(top_val.length-2);

	if(op_type == "*"){
		operatior = "*";
		if(top_display.innerHTML.length == 0 && num_check != false){	
			gen_op = new Number(disp_val) * 1;
			top_disp.innerHTML = top_display.innerHTML + display.innerHTML + " * ";
			display.innerHTML = gen_op;
		}else if(top_display.innerHTML.length != 0 && square_check==1 || square_r_check==1 || ivnum == 1){
			if (num_check==false){
				gen_op = new Number(disp_val) * 1;
				top_val = top_val +"*";
				console.log(gen_op);
			}else if (num_check==true){
				top_display.innerHTML=gen_op+"*"+display.innerHTML;
				gen_op = gen_op * display.innerHTML;
				display.innerHTML=gen_op;
				console.log(gen_op);
			}
		}else{
			if(gen_op !=0 && num_check != false){
				if(last_opertor == "+"){
					gen_op = gen_op + new Number(disp_val);
				}else if(last_opertor == "-"){
					gen_op = gen_op - new Number(disp_val);
				}else if(last_opertor == "/"){
					gen_op = gen_op / new Number(disp_val);
				}else{
					gen_op = gen_op * new Number(disp_val);
				}
				top_disp.innerHTML = top_display.innerHTML + display.innerHTML + " * ";
				display.innerHTML = gen_op;
			}else if (gen_op !=0 && num_check ==false){
				gen_op = new Number(disp_val) * 1;
				top_disp.innerHTML = top_display.innerHTML + display.innerHTML + " * ";
				display.innerHTML = gen_op;
			}
		}
		operatior_state = true;
		num_check = false;


	}else if(op_type == "+"){
		console.log("gen output: " + gen_op);
		operatior = "+";
		if(top_display.innerHTML.length == 0 && num_check != false){	
			gen_op = new Number(disp_val) + 0 ;
			top_display.innerHTML = top_display.innerHTML + display.innerHTML + " + ";
			display.innerHTML = gen_op;
		}else if(top_display.innerHTML.length != 0 && square_check==1 || square_r_check==1 || ivnum == 1){
			if (num_check==false){
				gen_op = new Number(disp_val) + 0;
				top_val = top_val +"+";
				console.log(gen_op);
			}else if (num_check==true){
				top_display.innerHTML=gen_op+"+"+display.innerHTML;
				gen_op = gen_op + new Number(display.innerHTML);
				display.innerHTML=gen_op;
				console.log(gen_op);
			}
		}else{
			if(gen_op !=0 && num_check != false){
				if(last_opertor == "*"){
					gen_op = gen_op * new Number(disp_val);
				}else if(last_opertor == "-"){
					gen_op = gen_op - new Number(disp_val);
				}else if(last_opertor == "/"){
					gen_op = gen_op / new Number(disp_val);
					
				}else{
					gen_op = gen_op + new Number(disp_val);
				}
				top_display.innerHTML = top_display.innerHTML + display.innerHTML + " + ";
				display.innerHTML = gen_op;
			}else if (gen_op !=0 && num_check ==false){
				gen_op = new Number(disp_val) + 0;
				top_disp.innerHTML = top_display.innerHTML + display.innerHTML + " + ";
				display.innerHTML = gen_op;
			}
		}
		operatior_state = true;
		num_check = false;


	}else if(op_type == "-"){
		operatior = "-";
		if(top_display.innerHTML.length == 0 && num_check != false){
			gen_op = new Number(disp_val) - 0 ;
			top_display.innerHTML = top_display.innerHTML + display.innerHTML + " - ";
			display.innerHTML = gen_op;
		}else if(top_display.innerHTML.length != 0 && square_check==1 || square_r_check==1 || ivnum == 1){
			if (num_check==false){
				gen_op = new Number(disp_val) - 0;
				top_val = top_val +"-";
				console.log(gen_op);
			}else if (num_check==true){
				top_display.innerHTML=gen_op+"-"+display.innerHTML;
				gen_op = gen_op - display.innerHTML;
				display.innerHTML=gen_op;
				console.log(gen_op);
			}
		}else {
			if(gen_op != 0 && num_check != false){
				if(last_opertor == "+"){
					gen_op = gen_op + new Number(disp_val);
				}else if(last_opertor == "*"){
					gen_op = gen_op * new Number(disp_val);
				}else if(last_opertor == "/"){
					gen_op = gen_op / new Number(disp_val);
					
				}else{
					gen_op = gen_op - new Number(disp_val);
				}
				top_display.innerHTML = top_display.innerHTML + display.innerHTML + " - ";
				display.innerHTML = gen_op;
			}else if (gen_op !=0 && num_check ==false){
				gen_op = new Number(disp_val) - 0;
				top_disp.innerHTML = top_display.innerHTML + display.innerHTML + " - ";
				display.innerHTML = gen_op;
			}
		}
		operatior_state = true;
		num_check = false; 


	}else if(op_type == "/"){
		operatior = "/";	
		if(top_display.innerHTML.length == 0 && num_check != false){
			gen_op =  new Number(disp_val) / 1;
			top_display.innerHTML = top_display.innerHTML + display.innerHTML + " / ";
			display.innerHTML = gen_op;
		}else if(top_display.innerHTML.length != 0 && square_check==1 || square_r_check==1 || ivnum == 1){
			if (num_check==false){
				gen_op = new Number(disp_val) / 1;
				top_val = top_val +"/";
				console.log(gen_op);
			}else if (num_check==true){
				top_display.innerHTML=gen_op+"/"+display.innerHTML;
				gen_op = gen_op / display.innerHTML;
				display.innerHTML=gen_op;
				console.log(gen_op);
			}
		}else{
			if (gen_op !=0 && num_check != false){
				if(last_opertor == "+"){
					gen_op = gen_op + new Number(disp_val);
				}else if(last_opertor == "-"){
					gen_op = gen_op - new Number(disp_val);
				}else if(last_opertor == "*"){
					gen_op = gen_op * new Number(disp_val);
					
				}else{
					gen_op = gen_op / new Number(disp_val);
				}
				top_display.innerHTML = top_display.innerHTML + display.innerHTML + " / ";
				display.innerHTML = gen_op;
			}else if (gen_op !=0 && num_check ==false){
				gen_op = new Number(disp_val) / 1;
				top_disp.innerHTML = top_display.innerHTML + display.innerHTML + " / ";
				display.innerHTML = gen_op;
			}
		}
		operatior_state = true;
		num_check = false;


	// }else if(op_type == "."){
	// 	top_display.innerHTML = display.innerHTML + " . ";
	// 	display.innerHTML = "";


	}else if(op_type == "+-"){
		if(display.innerHTML != "0"){
			if(display.innerHTML.indexOf("-") != 0){
				var new_dis = "-" + display.innerHTML;
				display.innerHTML = new_dis;
			}else if (display.innerHTML.indexOf("-") == 0){
				var to_dis = display.innerHTML.substr(1,);
				display.innerHTML = to_dis;
			}	
		}else{
			display.innerHTML = "0";
		}
	}
}




function calc(){
	
	cal_value = 1;
	var top_display = document.getElementById('top_disp');
	var display = document.getElementById('disp');
	var disp_val = display.innerHTML;
	var top_val = top_display.innerHTML;

	
	
	if(cv ==0 && operatior =="*"){
		if(gen_op !=0 && num_check != false){

			console.log(display.innerHTML);
			console.log(gen_op);
			console.log(disp_val);

			num_rep = disp_val;

			gen_op = gen_op * new Number(disp_val);	
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;

		}else if (gen_op !=0 && num_check == false){
			gen_op = gen_op * new Number(num_rep) ;
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;
		}		
	}

	if(cv ==0 && operatior =="-"){
		if(gen_op !=0 && num_check != false){

			console.log(display.innerHTML);
			console.log(gen_op);
			console.log(disp_val);

			num_rep = disp_val;

			gen_op = gen_op - new Number(disp_val);	
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;

		}else if (gen_op !=0 && num_check == false){
			gen_op = gen_op - new Number(num_rep) ;
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;
		}		
	}

	if(cv ==0 && operatior =="+"){
		if(gen_op !=0 && num_check != false){

			console.log(display.innerHTML);
			console.log(gen_op);
			console.log(disp_val);

			num_rep = disp_val;

			gen_op = gen_op + new Number(disp_val);	
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;

		}else if (gen_op !=0 && num_check == false){
			gen_op = gen_op + new Number(num_rep) ;
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;
		}		
	}

	if(cv ==0 && operatior =="/"){
		if(gen_op !=0 && num_check != false){

			console.log(display.innerHTML);
			console.log(gen_op);
			console.log(disp_val);

			num_rep = disp_val;

			gen_op = gen_op / new Number(disp_val);	
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;

		}else if (gen_op !=0 && num_check == false){
			gen_op = gen_op / new Number(num_rep) ;
			display.innerHTML = gen_op;		
			top_display.innerHTML = "";
			operatior_state = true;
			num_check = false;
		}		
	}

	if (ivnum==1) {
		top_display.innerHTML = "";
	}

	if (square_check == 1) {
		top_display.innerHTML = "";
	}

	if (square_r_check == 1) {
		top_display.innerHTML = "";
	}
}




function back_space(){
	var display = document.getElementById('disp');
	if(display.innerHTML.length >1){
		display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length-1);
	}else if (display.innerHTML.length =1){
		display.innerHTML = "0";
	}
	
}

function ce(){
	var display = document.getElementById('disp');
	if(display.innerHTML.length != 0){
		display.innerHTML = "0";
	}
}

function c(){
	cv = 1;
	var display = document.getElementById('disp');
	var top_display = document.getElementById('top_disp');
	var len_disp = display.innerHTML.length;
	display.innerHTML = "0"
	var len_top_disp = top_display.innerHTML.length;
	if (len_disp != 0 || len_top_disp != 0 || ivnum == 1 || square_check == 1 || square_r_check == 1){
		if (operatior == "*" || operatior == "/" || operatior == "+" || operatior == "-" || ivnum == 1 || square_check == 1 || square_r_check == 1){
			gen_op = 0;
			display.innerHTML = "0";
			top_display.innerHTML = "";
			operatior = "";
			num_check = false;
			operatior_state = false;
			thread_num = 0;
			num_rep = "";
			cal_value = 0;
			ivnum = 0;
			init_squ = 1;
			init_sr = 1;
			square_check = 0;
			square_r_check = 0;
			cv = 0;
		}
	}


}

function inv_num(){
	ivnum = 1;
	num_check=false
	var display = document.getElementById('disp');
	var top_display = document.getElementById('top_disp');
	var disp_val = display.innerHTML ; 
	var top_val = top_display.innerHTML; 
	if (top_val == ""){
		top_display.innerHTML = "1" + "/" + "(" + disp_val + ")" ;
		gen_op = 1/new Number(disp_val);
		display.innerHTML = gen_op;
		console.log("if side");
	}else{
		gen_op = 1/gen_op;
		top_display.innerHTML = "1" + "/" + "(" + gen_op + ")";
		console.log(gen_op);
		display.innerHTML = gen_op;
		console.log("else side");

	}
}

function square(){
	square_check = 1;
	num_check=false;
	console.log("dsad");
	var display = document.getElementById('disp');
	var top_display = document.getElementById('top_disp');
	var disp_val = display.innerHTML; 
	init_squ = display.innerHTML;
	var top_val = top_display.innerHTML;
	var chk = display.innerHTML.toString().length
	if(init_squ!=1 && chk <10){
		gen_op = Math.pow(new Number(disp_val), 2);
		top_display.innerHTML = "sqr" + "(" + init_squ + ")" ;
		display.innerHTML = gen_op;
		console.log(display.innerHTML.toString().length + "" + "if side");
	}else if(square_check == 1 && chk<10){
		top_display.innerHTML = "sqr" + "(" + init_squ + ")" ;
		gen_op = Math.pow(new Number(disp_val), 2);
		console.log("else if side");
		init_squ =1;
	}else{

		console.log("its enough");
		navigator.vibrate(1000);
	}
}

function square_root(){
	square_r_check = 1;
	num_check=false
	console.log("dggg");
	var display = document.getElementById('disp');
	var top_display = document.getElementById('top_disp');
	var disp_val = display.innerHTML; 
	init_sr = display.innerHTML;
	var top_val = top_display.innerHTML; 
	gen_op = Math.sqrt(new Number(disp_val));
	top_display.innerHTML = "sqroot" + "(" + init_sr + ")" ;
	display.innerHTML = gen_op;
	// if (square_r_check == 1){
	// 	top_display.innerHTML = "sqroot" + "(" + init_sr + ")" ;
	// 	gen_op = Math.sqrt(new Number(disp_val));
	// 	console.log("if block");
	// }
}

function percent(){
	
}

timer();