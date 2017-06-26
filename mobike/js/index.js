
function fnLoad(){
	var con = id("con");
	var head = id("head");
	var nav = document.querySelector(".nav");
	var page = document.getElementsByClassName("page");
	var sp1 = con.firstElementChild;
	var sp2 = con.lastElementChild;
	var onoff = true;
	var that = null;
	if(onoff){
		bind(con,"touchstart",start1);
		function start1(){
			if(onoff){
				nav.style.opacity = "1";
				setTimeout(function(){
					nav.style.display = "block";
				},0);
				head.style.backgroundColor = "rgba(224, 80, 61, .9)";
				onoff = false;
				sp1.style.transform = "rotateZ(-45deg)";
				sp2.style.transform = "rotateZ(45deg)";
			}else{
				nav.style.opacity = "0";
				setTimeout(function(){
					nav.style.display = "none";
				},400);
				head.style.backgroundColor = "rgba(224, 80, 61, 0)";
				onoff = true;
				sp1.style.transform = "rotateZ(0deg)";
				sp2.style.transform = "translateY(0.625rem)";
			}
		}
	}
	var  lis = nav.querySelectorAll("ul>li");
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onclick = function(i){
			lis[this.index].style.backgroundColor = "rgba(0,0,80,.9)";
			that = this.index;
			setTimeout(function(){
				nav.style.display = "none";
				for(var i=0;i<lis.length;i++){
					lis[i].style.backgroundColor = "rgba(224, 80, 61, .9)";
				}
				head.style.backgroundColor = "rgba(224, 80, 61, 0)";
				onoff = true;
				sp1.style.transform = "rotateZ(0deg)";
				sp2.style.transform = "translateY(0.625rem)";
				for(var i=0;i<lis.length;i++){
					page[i].style.display = "none";
				}
				page[that].style.display = "block";
			},200);
		}
	}
	
	
		
		
	
	
	
	
}//点击右上角












