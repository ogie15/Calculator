
var php_con = "http://localhost/eni/index.php/Eni/worker" ;
var first =0;
var equal =0;
var ccheck =0;
var interval = 1000;
var result = "";
var json = "http://localhost/eni/assets/js/config.json" ;
var active_url = location.href;
var pslash = active_url.lastIndexOf("/");
var v_use_s = active_url.slice(pslash)
console.log(active_url);


function config_check(){
	$.get(json, function(data,status){
		result = data;
		var array_val = "";
		var mainV = ""
		var files = data.files;
		var i = 0; 
		for (i=0; i<files.length; i++){
			array_val = files[i];
			var val = array_val.search(v_use_s);
			if (val!= -1) {
				mainV = array_val;
			}else{}
		}
		$.post(php_con,{"mainF":mainV}, function (data,status){
			first = data.first;
			equal = data.equal;
			ccheck = data.ccheck;
			if (first ==1 || ccheck==1) {
				
				document.location.reload(true);
			}else if (equal ==1 || first !=1) {
				console.log("no changes!!!!! (..)")

			}
		});

	});
	
}

setInterval(config_check, interval);


