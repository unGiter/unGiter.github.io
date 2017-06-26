	var inp = document.querySelector("header .nav_v1 ul li .nav_v1_li7 input");
	var btn = document.querySelector("header .nav_v1 ul li .nav_v1_li7 button");
	
	
	btn.onclick = function(){
		jsonp();
	}
	function jsonp(){
		var os = document.createElement("script");
		os.id = "search";
		os.src = "http://developer.baidu.com/map/index.php?title='"+inp.value+"'的搜索结果&profile=default&search="+inp.value+"&fulltext=Search"
		document.body.appendChild(os);
		window.location.href = os.src;
	}
	
	
	
	

